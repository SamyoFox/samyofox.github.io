"use strict";

var tabNames = ["/","/stuff"];

function checkWebP(callback) {
	var img = new Image();
	img.onload = function() {
		var result = (img.width > 0) && (img.height > 0);
		callback(result);
	};
	img.onerror = function() {
		callback(false);
	};
	img.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
}

checkWebP(function(result) {
	if (result === false) {
		console.log("No WebP");
		document.documentElement.classList.add("nowebp")
	} else {
		console.log("Yes WebP");
	}
});

function tabClick(num, dontPushState) {
	Object.keys(document.querySelectorAll(".tab")).forEach(function(tab) {
		if (tab === "length") { return; } // old safari is stupid afg
		document.querySelectorAll(".tab")[tab].classList.remove("tabSelected");
	})
	Object.keys(document.querySelectorAll(".section")).forEach(function(section) {
		if (section === "length") { return; } // old safari is stupid af
		document.querySelectorAll(".section")[section].classList.remove("sectionSelected");
	})
	document.querySelector(".tab"+num).classList.add("tabSelected")

	document.querySelector(".sectionList").setAttribute("data-current-section",num);

	document.querySelector(".section"+num).classList.add("sectionSelected");
}

document.querySelector(".tab1").addEventListener("click", function(e) {
	history.pushState({}, "", "/");
	onStateChange("/");
	e.preventDefault();
})
document.querySelector(".tab2").addEventListener("click", function(e) {
	history.pushState({}, "", "/stuff");
	onStateChange("/stuff");
	e.preventDefault();
})

function onStateChange(url) {
	url = url.replace(/\?.+/g, "").replace(/\/new/,"");

	console.debug("onStateChange", url);

	if (url === "/stuff" || url === "/stuff/") {
		if (url === "/stuff/") {
			history.replaceState({}, "", "/stuff" + window.location.search)
		}
		tabClick(2)
	}

	if (url === "/") {
		tabClick(1)
	}
}
window.addEventListener("popstate", function(event) {
	console.debug("popstate");
	onStateChange(location.pathname);
})

// Map old style URLs to new style

if (location.hash === "#links") {
	history.pushState({}, "", "/");
	onStateChange("/")
} else if (location.hash === "#stuff") {
	history.pushState({}, "", "/stuff");
	onStateChange("/stuff")
} else {
	// Else, use normal type
	onStateChange(location.pathname)
}

discordCopy.addEventListener("click", function () {
	copyDiscordFakeElement.select();
	document.execCommand("copy");

	discordCopy.classList.add("copied");

	clearTimeout(window.discordCopyTimeout);

	window.discordCopyTimeout = setTimeout(function() {
		discordCopy.classList.remove("copied");
	},1000)
});

function getGPU() {
	try {
		var gl = document.createElement("canvas").getContext ? document.createElement("canvas").getContext("webgl") || document.createElement("canvas").getContext("experimental-webgl") : null;

		if (gl !== null) {
			var debug = gl.getExtension('WEBGL_debug_renderer_info');
			var gpu = debug && gl.getParameter(debug.UNMASKED_RENDERER_WEBGL) || "";
			var useImpreciseGpuName = false;

			if (gpu.indexOf("ANGLE") > -1) {
				gpu = gpu.replace(/ANGLE \(/g, "").replace(/\)/g, "");
			}

			console.log(gpu.match(/(NVIDIA )?\w+ \w+ \d+/g));

			var platform = new PlatformInfo();

			if (platform.browser === "firefox" && platform.isBrowserVersionHigherThan(91)) {
				useImpreciseGpuName = true;
			}

			if (gpu.match(/NVIDIA \w+ \w+ \d+/g)) {
				gpu = gpu.match(/NVIDIA \w+ \w+ \d+/g)[0];
				if (useImpreciseGpuName) { gpu = "NVIDIA"; }
			} else if (gpu.match(/(GeForce|Titan|Quadro) \w+( \d+)?/g)) {
				gpu = "NVIDIA " + gpu.match(/(GeForce|Titan|Quadro) \w+( \d+)?/g)[0];
				if (useImpreciseGpuName) { gpu = "NVIDIA"; }
			}

			if (gpu.match(/Intel(\(R\)?)? \w+( \w+)?( \d+)?/g)) {
				// gpu = gpu.replace(/( Graphics|\(R)/g, "");
				gpu = gpu.match(/Intel(\(R\)?)? \w+( \w+)?( \d+)?/g)[0];
				if (useImpreciseGpuName) { gpu = "Intel"; }
			}

			if (gpu.match(/(AMD|ATI) \w+( \w+)?( \d+)?/g)) {
				gpu = gpu.match(/(AMD|ATI) \w+( \w+)?( \d+)?/g)[0];
				if (useImpreciseGpuName) { gpu = "AMD"; }
			}

			if (gpu.match(/Apple \w+/g)) {
				gpu = gpu.match(/Apple \w+/g)[0];
				// if (useImpreciseGpuName) { gpu = "Apple"; }
				// Only relevant once Apple makes more M-series machines. Soon(tm)
			}
				console.log(gpu)

			return gpu;
		}
	} catch(e) {
		console.error(e);
		return "Unknown GPU"
	}

	return "Unknown GPU"
}

function getBrowser() {
	var platform = new PlatformInfo();
	var browsers = {
		"chrome":"Chrome",
		"edge":"Microsoft Edge",
		"edgeLegacy":"Microsoft Edge",
		"firefox":"Firefox",
		"khtml":"KHTML",
		"ie":"Internet Explorer",
		"opera":"Opera",
		"operaPresto":"Opera",
		"safari":"Safari"
	}

	return browsers[platform.getBrowser()] + " " + platform.getBrowserVersion();
}

function getSystem() {
	var platform = new PlatformInfo();

	var windowsVersions = {
		"5.0":"Windows 2000",
		"5.1":"Windows XP",
		"5.2":"Windows XP",
		"6.0":"Windows Vista",
		"6.1":"Windows 7",
		"6.2":"Windows 8",
		"6.3":"Windows 8.1",
		"6.4":"Windows 10",
		"10.0":"Windows 10 or Windows 11",
		"11.0":"Windows 11"
	}

	var macVersions = {
		"10.4":"Mac OS X Tiger",
		"10.5":"Mac OS X Leopard",
		"10.6":"Mac OS X Snow Leopard",
		"10.7":"Mac OS X Lion",
		"10.8":"OS X Mountain Lion",
		"10.9":"OS X Mavericks",
		"10.10":"OS X Yosemite",
		"10.11":"OS X El Capitan",
		"10.12":"macOS Sierra",
		"10.13":"macOS High Sierra",
		"10.14":"macOS Mojave",
		"10.15":"macOS Catalina or higher",
		"10.16":"macOS Big Sur or higher",
		"11.0":"macOS Big Sur",
		"11.1":"macOS Big Sur",
		"11.2":"macOS Big Sur",
		"11.3":"macOS Big Sur",
		"11.4":"macOS Big Sur",
		"11.5":"macOS Big Sur",
		"11.6":"macOS Big Sur",
		"12.0":"macOS Monterey"
	}

	var oses = {
		android: "Android",
		chromeos: "Chrome OS",
		linux: "Linux",
		ios: "iOS",
		mac: "macOS",
		windows9x: "Windows 9x",
		windows: "Windows",
		windowsPhone: "Windows Phone / Mobile",
		unknown: "Unknown OS"
	}

	var displayVersionNumber = true;

	if ((platform.architecture !== "arm64" && platform.architecture !== "amd64") || platform.getBrowser() === "ie"|| (platform.getBrowser() === "edgeLegacy")) {
		windowsVersions["10.0"] = "Windows 10"
	}

	if (platform.architecture === "arm64") {
		macVersions["10.15"] = "macOS Big Sur or higher";
		displayVersionNumber = false;
	}

	// console.log(platform)

	var arch = platform.architecture ? " ("+platform.architecture+")" : "";

	switch(platform.osPlatform) {
		case "mac":
			return macVersions[platform.getOSVersion().match(/\d+\.\d+/g)[0]] + " " + (displayVersionNumber ? platform.osVersion : "") + arch;
		case "windows":
			return windowsVersions[platform.getOSVersion()] + arch;
		default:
			return oses[platform.osPlatform] + " " + (platform.osVersion || "") + arch
	}
	
}

document.querySelector(".copyrightLink").addEventListener("click", function () {
	// console.log("click");

	var gpu = getGPU();
	
	document.querySelector(".modalContainer").innerHTML = 
		'<div class="modal">\
			<h2 class="modalTitle">About</h2>\
			<p><strong>SamyoFox website</strong> version 1.0</p>\
			<p><strong>User agent: </strong> ' + (navigator.userAgent.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")) + ' </p>\
			<p><strong>Reported OS: </strong> ' + getSystem() + ' </p>\
			<p><strong>Reported browser: </strong> ' + getBrowser() + ' </p>\
			' + ((gpu !== "Apple GPU" && gpu !== "Unknown GPU" && gpu !== "") ? ('<p><strong>Reported GPU:</strong> ' + gpu + '</p>') : '') +
		'</div>'
	

	document.querySelector(".modalContainer").classList.add("open");
})

document.querySelector(".modalContainer").addEventListener("click", function(event) {

	if (event.target.classList.contains("modalContainer")) {
		var modal = document.querySelector(".modal");
		if (modal) {
			modal.classList.add("dismissing");
			document.querySelector(".modalContainer").classList.remove("open");

			modal.addEventListener("transitionend", function() {
				document.querySelector(".modalContainer").removeChild(modal);
			})
		}
		
	}
	
})
