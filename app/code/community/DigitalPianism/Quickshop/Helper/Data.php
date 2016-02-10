<?php
/**
 * Class DigitalPianism_Quickshop_Helper_Data
 */
class DigitalPianism_Quickshop_Helper_Data extends Mage_Core_Helper_Abstract {
    /**
     *
     */
    public function isEnabled()
    {
        return Mage::getStoreConfigFlag('quickshop/options/enable');
    }
}