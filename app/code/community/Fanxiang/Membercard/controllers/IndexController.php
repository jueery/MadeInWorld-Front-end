<?php

/**
 * 
 * Access like 
 * https://magenti.co/alpha/
 * or
 * https://magenti.co/alpha/index/index/
 * 
 */
class Fanxiang_Membercard_IndexController extends Mage_Core_Controller_Front_Action
{

  public function indexAction(){ 
    $this->loadLayout();
    $this->_initLayoutMessages('customer/session');
    $this->renderLayout();
  }

  public function bindingAction(){ 
    // var_dump(Mage::getModel("customer/customer")->load(1)->getAttributes());
    $this->loadLayout();
    $this->_initLayoutMessages('customer/session');
    $this->renderLayout();
  }
     
  public function checkcardAction(){
    if($this->getRequest()->isPost()){
      $cardNumber =$this->getRequest()->getParam('cardNumber');
      if(ereg("^[0][0-9][0-1][0-9][0-9][0-9][0-9][0-9][0-1][0-9]*$",$cardNumber)) {
        $this->_redirect('*/*/binding',array('cardNumber'=>$cardNumber)); 
      }else{
        Mage::getSingleton('customer/session')->addError("对不起，您输入的卡号错误，请重新输入!");
        $this->_redirect('membercard'); 
      }
    }
  }

  public function newuserAction(){
    $request = $this->getRequest();
    if($request->isPost()){
      $cardNumber = $request->getParam('cardNumber');
      $username = $request->getParam('username');
      $password = $request->getParam('password');
      $repassword =$request->getParam('repassword');
      if($username==""){
        Mage::getSingleton('customer/session')->addError("请输入用户名!");
        $this->_redirect('*/*/binding');
        return;
      }
      if($password == ""){
        Mage::getSingleton('customer/session')->addError("请输入密码!");
        $this->_redirect('*/*/binding');
        return;
      }
      if($password != $repassword){
        Mage::getSingleton('customer/session')->addError("两次输入密码不一致!");
        $this->_redirect('*/*/binding');
        return;
      }
      $emails = Mage::getModel('customer/customer')->getCollection()->addAttributeToFilter('userName',$username)
        ->getFirstItem()->load();
      if($emails->getData('username')){
        Mage::getSingleton('customer/session')->addError("用户名已被使用!");
        $this->_redirect('*/*/binding');
      }
      


    }
  }
  
  public function olduserAction(){
    $request = $this->getRequest();
    if($request->isPost()){
      $cardNumber = $request->getParam('cardNumber');
      $username = $request->getParam('username');
      $password = $request->getParam('password');

    }
  }
}
