# blinkTitle.js
Is a Pure Javascript Implementation of TitleBar Alert or Notification.It Can Perform Blinking of HTML Titlebar for Titlebar Alert or Titlebar Notification http://flouthoc.github.io/blinkTitle.js/

#Preview
![Preview](https://github.com/flouthoc/blinkTitle.js/blob/master/op.gif)

#Usage
Getting Started
```html
<script type="text/javascript" src="https://raw.githubusercontent.com/flouthoc/blinkTitle.js/master/index.js"></script>
```

#Usage

####Regular Blink
```js
  blinkTitle({
    title: 'your-title', //optional
    message: 'your-message',
    delay: 1200
  });
 
````
  
####Regular Blink with Timeout (milliseconds) (stops after 'duration')
```js
  blinkTitle({
    title: 'your-title',
    message: 'your-message',
    delay: 1200,
    duration: 5000
  });

```

#### Notify When User is On Other Tab
```js
  blinkTitle({
    title: 'your-title',
    message: 'your-message',
    delay: 1200,
    notifyOffPage: true
  });
  
```
#### Notify When User is On Other Tab with Timeout (milliseconds) (stops after 'timeout')
```js
  blinkTitle({
    title: 'your-title',
    message: 'your-message',
    delay: 1200,
    duration: 5000,
    notifyOffPage: true
  });
```


####Stop 
```js
  blinkTitleStop();
  ```
#Examples
http://flouthoc.github.io/blinkTitle.js/

