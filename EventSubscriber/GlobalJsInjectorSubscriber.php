<?php

namespace Skynettechnologies\AllinoneAccessibilityBundle\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class GlobalJsInjectorSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::RESPONSE => 'onKernelResponse',
        ];
    }

    public function onKernelResponse(ResponseEvent $event): void
    {
        $request = $event->getRequest();
        $response = $event->getResponse();
        $headers = $response->headers;

        if (!$headers->has('Content-Security-Policy')) {
            return;
        }

        $csp = $headers->get('Content-Security-Policy');

        // Domains you want to add per directive
        $additionalSources = [
            'script-src' => ['https://www.skynettechnologies.com'],
            'connect-src' => ['https://*.skynettechnologies.com','https://ada.skynettechnologies.us','https://*.googleapis.com','https://vlibras.gov.br'],
            'media-src' => ['data:','https://www.skynettechnologies.com'],
            'img-src' => ['https://www.skynettechnologies.com','https://ada.skynettechnologies.us'],
            'font-src' => ['https://www.skynettechnologies.com','https://*.gstatic.com'],
            'default-src'=>['data:','self']
        ];

        // Update each directive in the existing CSPD
        foreach ($additionalSources as $directive => $domains) {
            $csp = $this->addDomainsToDirective($csp, $directive, $domains);
        }

        $response->headers->set('Content-Security-Policy', $csp);

        // Only modify HTML responses from the PIM backend (not API, AJAX, etc.)
        /*if (
            !$response->headers->contains('Content-Type', 'text/html') ||
            !$request->getRequestUri() ||
            str_starts_with($request->getRequestUri(), '/api') || // ignore API
            $request->isXmlHttpRequest()
        ) {
            return;
        }*/

        $content = $response->getContent();
        //$script = '<script>setTimeout(() => { let aioa_script_tag = document.createElement("script"); aioa_script_tag.src = "https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=#94944C&token=&position=bottom_right";  aioa_script_tag.id = "aioa-adawidget";aioa_script_tag.defer="true"; document.getElementsByTagName("body")[0].appendChild(aioa_script_tag); }, 3000);</script>';
        $script = '<script id="aioa-adawidget" src="https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=#94944C&token=&position=bottom_right" defer></script>';
        $script .= ' <script src="/public/bundles/skynettechnologiesallinoneaccessibility/js/settings.js"></script>';
        //Inject before </head>
        $content = str_replace('</head>', $script . "\n</head>", $content);
        $response->setContent($content);
    }
    private function addDomainsToDirective(string $csp, string $directive, array $domains): string
    {
        return preg_replace_callback(
            "/{$directive}([^;]*)/",
            function ($matches) use ($domains, $directive) {
                $currentSources = trim($matches[1]);
                $existing = explode(' ', $currentSources);

                foreach ($domains as $domain) {
                    if (!in_array($domain, $existing, true)) {
                        $existing[] = $domain;
                    }
                }

                return $directive . ' ' . implode(' ', $existing);
            },
            $csp
        );
    }
}
