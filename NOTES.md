## NOTES ##
Date: 2015-07-03

Notes on the SearchButton, as it is not on later Android devices.
Link to offical blog at below.

"""
**Summary**

* Android no longer requires a dedicated Menu button, some devices don?t have one, and you should migrate away from using it.
* Set targetSdkVersion to 14, then test your app on Android 4.0.
* Add showAsAction="ifRoom" to menu items you?d like to surface in the action bar.

  If the ActionBar doesn?t work for your app, you can remove it with Theme.Holo.NoActionBar or Theme.DeviceDefault.NoActionBar.

For information about how you should design your action bar, see Android Design?s Action Bar guide. More information about implementing the action bar is also available in the Action Bar developer guide.
"""

Say Goodbye to the Menu Button
http://android-developers.blogspot.com/2012/01/say-goodbye-to-menu-button.html
"""
Before Android 3.0 (Honeycomb), all Android-powered devices included a dedicated Menu button. (...) If I had to put this whole post into one sentence, it?d be: Set targetSdkVersion to 14 and, if you use the options menu, surface a few actions in the action bar with showAsAction="ifRoom".
"""

Creating a Search Interface
http://developer.android.com/guide/topics/search/search-dialog.html
"""
However, the search widget is available only in Android 3.0 (API Level 11) and higher. 
"""

Where is the menu button? - What's App - FAQ
https://www.whatsapp.com/faq/en/android/21228643

Know your buttons
http://www.androidcentral.com/know-your-buttons
