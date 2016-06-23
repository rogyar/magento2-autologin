# Admin Autologin for Magento 2
The simple extension that allows to perform admin log in automatically without asking for login/password. Useful for demo purposes. Not recommended to use on production environment.

## Installation
- Put the package contents to `app/code/Atwix/Autologin` (you need to create this directory)
- Open app/code/Atwix/Autologin/view/adminhtml/templates/autologin.phtml and enter correct credentials for `$autologinUsername` and `$autologinPassword` variables
- Clean the cache

## Mics
If you want to disable the functionality temporarily, just create a new cookie with name `noautologin`