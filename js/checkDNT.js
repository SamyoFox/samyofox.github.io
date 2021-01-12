function isDoNotTrackEnabled () {
    const doNotTrackOption = (
      window.doNotTrack ||
      window.navigator.doNotTrack ||
      window.navigator.msDoNotTrack
    )
  
    if (!doNotTrackOption) {
      return false
    }
  
    if (
      doNotTrackOption.charAt(0)  === '1' ||
      doNotTrackOption === 'yes'
    ) {
      return true
    }
  
    return false
}

if (isDoNotTrackEnabled()){
    document.getElementById("dnt-notice").style = "display: initial;";
}