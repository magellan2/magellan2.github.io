function href(elementId, url, text) {
  var htmlelement = document.getElementById(elementId);
  if (htmlelement) {
    if (url && url !== '') {
      htmlelement.innerHTML = '<a href="'+url+'">'+text+'</a>';
    } else {
      htmlelement.innerHTML = text;
    }
  }
}

async function getJSON(url, callback) {
  fetch(url)
      .then((response) => response.json())
      .then((json) => callback(json));
}

var releases = [];
var RELEASE = {};
var LATEST = {};

function get_magellan_release() {
  getJSON('https://api.github.com/repos/magellan2/magellan2/releases', function(json) {
    json.forEach(function (json_release) {
      if (json_release['draft']) return;
      var release = {};
      release["tag"] = json_release["tag_name"];
      release["version"] = json_release["tag_name"];
      release['url'] = json_release['html_url'];
      release['name'] = json_release['name'];
      release['prerelease'] = json_release['prerelease'];
      release['created'] = json_release['created_at'];
      release['published'] = json_release['published_at'];
      release['formatted_time'] = json_release['created_at'];
      release['jar'] = "";
      release['win'] = "";
      release['unix'] = "";
      release['mac'] = "";
      release['zip'] = "";
      release['source'] = json_release['zipball_url'];
      release['changelog'] = "";
      release['version_file'] = "";
      release['description'] = json_release['body'];
      var assets = [];
      json_release['assets'].forEach(function (json_asset) {
        var asset = {};
        asset['name'] = json_asset['name'];
        asset['date'] = json_asset['updated_at'];
        asset['url'] = json_asset['browser_download_url'];
        
        if (json_asset['name'].indexOf('_windows-x64_') > 0) {
          release["win"] = json_asset['browser_download_url'];
        }
        if (json_asset['name'].indexOf('_unix_') > 0) {
          release["unix"] = json_asset['browser_download_url'];
        }
        if (json_asset['name'].indexOf('_macos_') > 0) {
          release["macos"] = json_asset['browser_download_url'];
        }
        if (json_asset['name'].endsWith('.zip')) {
          release["zip"] = json_asset['browser_download_url'];
        }
        if (json_asset['name'].endsWith('.jar')) {
          release["jar"] = json_asset['browser_download_url'];
        }
        if (json_asset['name'] === 'CHANGELOG.txt') {
          release["changelog"] = json_asset['browser_download_url'];
        }
        if (json_asset['name'] === 'VERSION') {
          release["version_file"] = json_asset['browser_download_url'];
        }
        assets.push(asset);
      });
      
      release['assets'] = assets;
      release['original'] = json_release;
      
      releases.push(release);
    });
    
    var release_version = '0';
    var latest_version = '0';
    
    releases.forEach(function(release) {
      if (!release["prerelease"] && release_version < release["version"]) {
        RELEASE = release;
        release_version = release["version"];
      }
      if (latest_version < release["created"]) {
        LATEST = release;
        latest_version = release["created"];
      }
    });
    
    var htmlelement = document.getElementById("release_changelog_link");
    if (htmlelement && RELEASE["changelog"]) htmlelement.innerHTML = '<a href="'+RELEASE["changelog"]+'">CHANGELOG</a>';

    var htmlelement = document.getElementById("release_version");
    if (htmlelement) htmlelement.innerHTML = RELEASE["version"];

    var htmlelement = document.getElementById("release_time");
    if (htmlelement) htmlelement.innerHTML = RELEASE["formatted_time"];

    href("release_link_jar",RELEASE["jar"],"Installer JAR");
    href("release_link_windows",RELEASE["win"],"Windows Installer");
    href("release_link_unix",RELEASE["unix"],"Shell Installer");
    href("release_link_macos",RELEASE["macos"],"MAC OS Installer");
    href("release_link_zip",RELEASE["zip"],"ZIP File");
    href("release_link_source",RELEASE["source"],"Source code at github (for developers)");

    var htmlelement = document.getElementById("nightly_changelog_link");
    if (htmlelement && LATEST["changelog"]) htmlelement.innerHTML = '<a href="'+LATEST["changelog"]+'">CHANGELOG</a>';

    var htmlelement = document.getElementById("nighlty_version");
    if (htmlelement) htmlelement.innerHTML = LATEST["version"];

    var htmlelement = document.getElementById("nightly_time");
    if (htmlelement) htmlelement.innerHTML = LATEST["formatted_time"];

    href("nightly_link_jar",LATEST["jar"],"Installer JAR");
    href("nightly_link_windows",LATEST["win"],"Windows Installer");
    href("nightly_link_unix",LATEST["unix"],"Shell Installer");
    href("nightly_link_macos",LATEST["macos"],"MAC OS Installer");
    href("nightly_link_zip",LATEST["zip"],"ZIP File");
    href("nightly_link_source",LATEST["source"],"Source code at github (for developers)");

    // console.log(RELEASE);
    // console.log(LATEST);
  });
}

get_magellan_release();

var plugin_releases = [];
var PLUGIN_RELEASE = {};
var PLUGIN_LATEST = {};


function get_plugin_release() {
  getJSON('https://api.github.com/repos/magellan2/magellan2-extensions-plugins/releases', function(json) {
    json.forEach(function (json_release) {
      if (json_release['draft']) return;
      var release = {};
      release["tag"] = json_release["tag_name"];
      release["version"] = json_release["tag_name"];
      release['url'] = json_release['html_url'];
      release['name'] = json_release['name'];
      release['prerelease'] = json_release['prerelease'];
      release['created'] = json_release['created_at'];
      release['published'] = json_release['published_at'];
      release['formatted_time'] = json_release['created_at'];
      release['source'] = json_release['zipball_url'];
      release['description'] = json_release['body'];
      release['jar_alliance'] = '';
      release['zip_alliance'] = '';
      release['jar_lighthouseicons'] = '';
      release['zip_lighthouseicons'] = '';
      release['jar_mapcleaner'] = '';
      release['zip_mapcleaner'] = '';
      release['jar_mapicons'] = '';
      release['zip_mapicons'] = '';
      release['jar_memorywatch'] = '';
      release['zip_memorywatch'] = '';
      release['jar_shiploader'] = '';
      release['zip_shiploader'] = '';
      release['jar_teacher'] = '';
      release['zip_teacher'] = '';
      release['jar_statistics'] = '';
      release['zip_statistics'] = '';
      var assets = [];
      json_release['assets'].forEach(function (json_asset) {
        var asset = {};
        asset['name'] = json_asset['name'];
        asset['date'] = json_asset['updated_at'];
        asset['url'] = json_asset['browser_download_url'];
        
        var plugin = "";
        if (asset['name'].startsWith("alliance_")) {
          plugin = "alliance";
        } else if (asset['name'].startsWith("lighthouseicons_")) {
          plugin = "lighthouseicons";
        } else if (asset['name'].startsWith("mapcleaner_")) {
        plugin = "mapcleaner";
        } else if (asset['name'].startsWith("mapicons_")) {
          plugin = "mapicons";
        } else if (asset['name'].startsWith("memorywatch_")) {
          plugin = "memorywatch";
        } else if (asset['name'].startsWith("shiploader_")) {
          plugin = "shiploader";
        } else if (asset['name'].startsWith("statistics_")) {
          plugin = "statistics";
        } else if (asset['name'].startsWith("teacher_")) {
          plugin = "teacher";
        }
        
        if (json_asset['name'].endsWith('.zip')) {
          release["zip_"+plugin] = json_asset['browser_download_url'];
        }
        if (json_asset['name'].endsWith('.jar')) {
          release["jar_"+plugin] = json_asset['browser_download_url'];
        }
        if (json_asset['name'] === 'CHANGELOG.txt') {
          release["changelog"] = json_asset['browser_download_url'];
        }
        if (json_asset['name'] === 'VERSION') {
          release["version_file"] = json_asset['browser_download_url'];
        }
        assets.push(asset);
      });
      
      release['assets'] = assets;
      release['original'] = json_release;
      
      plugin_releases.push(release);
    });
    
    var release_version = '0';
    var latest_version = '0';
    
    plugin_releases.forEach(function(release) {
      if (!release["prerelease"] && release_version < release["version"]) {
        PLUGIN_RELEASE = release;
        release_version = release["version"];
      }
      if (latest_version < release["created"]) {
        PLUGIN_LATEST = release;
        latest_version = release["created"];
      }
    });
    
    href("nightly_plugin_mapcleaner_installer",PLUGIN_LATEST["jar_mapcleaner"],"Installer JAR");
    href("nightly_plugin_memorywatch_installer",PLUGIN_LATEST["jar_memorywatch"],"Installer JAR");
    href("nightly_plugin_statistics_installer",PLUGIN_LATEST["jar_statistics"],"Installer JAR");
    href("nightly_plugin_teacher_installer",PLUGIN_LATEST["jar_teacher"],"Installer JAR");
    href("nightly_plugin_shiploader_installer",PLUGIN_LATEST["jar_shiploader"],"Installer JAR");
    href("nightly_plugin_mapicons_installer",PLUGIN_LATEST["jar_mapicons"],"Installer JAR");
    href("nightly_plugin_lighthouseicons_installer",PLUGIN_LATEST["jar_lighthouseicons"],"Installer JAR");

    // console.log(PLUGIN_RELEASE);
    // console.log(PLUGIN_LATEST);
  });
}

get_plugin_release();
