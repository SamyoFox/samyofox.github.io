if (window.doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || 'msTrackingProtectionEnabled' in window.external) {
  if (window.doNotTrack == "1" || navigator.doNotTrack == "yes" || navigator.doNotTrack == "1" || navigator.msDoNotTrack == "1" || window.external.msTrackingProtectionEnabled()) {
    document.getElementById("dnt-notice").style = "display: initial;";
  } else {}
} else {}