<?php
class Fanxiang_Membercard_Helper_Data extends Mage_Core_Helper_Abstract
{
  public function registerBindcard($observer){
    $request = Mage::app()->getRequest();
    $cardNumber = $request->getParam('cardNumber');
    if($cardNumber){
      $customer = $observer->getEvent()->getCustomer();
      $customer->setCardNumber($customer);
      $custmoer->setGroupId(8);
    }
    
  } 
     
     
  public function loginBindcard($observer){
    $request = Mage::app()->getRequest();
    $cardNumber = $request->getParam('cardNumber');
    if($cardNumber){
      $customer = $observer->getEvent()->getCustomer();
      $customer->setCardNumber($customer);
      $custmoer->setGroupId(8);
    }
  } 
}