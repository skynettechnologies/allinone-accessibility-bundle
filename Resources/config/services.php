<?php

use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symfony\Component\DependencyInjection\Reference;

return function (ContainerConfigurator $container) {
    $services = $container->services();
    $services
        ->set(\Skynettechnologies\AllinoneAccessibilityBundle\EventSubscriber\GlobalJsInjectorSubscriber::class)
        ->tag('kernel.event_subscriber');
};