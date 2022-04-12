# Wonoly browser

An open source, private browser made by wonoly.

## Project overview

Wonoly's browser is made of diferent open source projects that made this browser exist.

* [chromium](https://chromium.org)
	* it is a open source browser made by google in where chrome is based in.
		* It is based on chromium but it is much more private than it, combining both efficiency and privacy.
	* based on a chromium branch
		* (updated every wonoly release)
* [browser-core](https://github.com/wonoly/browser-core)
	* files used to help customize and change chromium's source code.

## Prequisites

* [windows](https://chromium.googlesource.com/chromium/src/+/main/docs/windows_build_instructions.md#system-requirements)
	* may also need to set up visual studio [docs](https://chromium.googlesource.com/chromium/src/+/main/docs/windows_build_instructions.md#setting-up-windows)
* [inux](https://chromium.googlesource.com/chromium/src/+/master/docs/linux/build_instructions.md#system-requirements)
* [mac](https://chromium.googlesource.com/chromium/src/+/main/docs/mac_build_instructions.md#System-requirements) - not tested!

## build

1. clone the repository
	```
    git clone https://github.com/wonoly/browser && cd browser
    ```
2. install required packages
	```
    npm i # or yarn
    ```
3. initiate the project (this will take a while since it needs to clone chromium)
	```
    npm run init
    ```
4. build chromium (recomended to leave this running over night, ~6 hours of compile time)
	```
    npm run build
    ```
5. Congratulations! you survived. Now, run the project.
	```
    npm run start
    ```
