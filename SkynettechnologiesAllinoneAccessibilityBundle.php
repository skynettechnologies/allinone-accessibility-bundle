<?php

namespace Skynettechnologies\AllinoneAccessibilityBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;
use Skynettechnologies\AllinoneAccessibilityBundle\DependencyInjection\AllinoneAccessibilityExtension;
use Symfony\Component\DependencyInjection\Extension\ExtensionInterface;
/*use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Loader\XmlFileLoader;
*/
class SkynettechnologiesAllinoneAccessibilityBundle extends Bundle
{
     public function boot() {
    
    }
    
    protected function createContainerExtension(): ?ExtensionInterface
    {
        return new AllinoneAccessibilityExtension();
    }
}
