# [stool](//albertxing.github.io/stool)
a JavaScript benchmarking utility

## Motivation
[jsPerf](//jsperf.com) has been running into some [spam issues lately](//github.com/jsperf/jsperf.com/issues/18), so I decided to create a similar tool that was simpler and completely server-free.

### Disadvantages compared to jsPerf
 - does not keep record of performance across different browsers and systems
 - ~~does not offer methods to save or share results~~ Added! See [#2](https://github.com/albertxing/stool/issues/2)
 
### Advantages
 - no need for logins / name & email / reCAPTCHA
 - ["always" up](//status.github.com)
 - only uses static resources<sup>\*</sup>, so easy to serve locally & works offline (just open the HTML file)
 - fast!

<sup>\* I make a single external request for page view analysis</sup>

## Acknowledgements
 - built using [Benchmark.JS](http://benchmarkjs.com)
 
## Contributing
There are still many features that are missing - please create issues and submit pull requests if you'd like to contribute!
Any help is appreciated.
