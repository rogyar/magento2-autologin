/**
 * @author Atwix Team
 * @copyright Copyright (c) 2016 Atwix (https://www.atwix.com/)
 * @package Atwix_Autologin
 */

define([
    'jquery'
], function ($) {

    return {
      adminAutologin:  adminAutologin
    };

    /**
     * Performs automatic login process
     * @param {String} username
     * @param {String} password
     */
    function adminAutologin(username, password) {
        $('#username').val(username);
        $('#login').val(password);
        $('.action-login').click();
        $('#login-form').hide();
        $('#autologin-message').show();
    }
});