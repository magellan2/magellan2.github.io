function href(elementId, url, text) {
  var htmlelement = document.getElementById(elementId);
  if (htmlelement) {
    if (url && url !== "") {
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

function get_magellan_release() {
  getJSON("https://api.github.com/repos/magellan2/magellan2/releases/latest", function(json_release) {
    if (json_release["draft"]) return;
    var release = {};
    release["tag"] = json_release["tag_name"];
    release["version"] = json_release["tag_name"];
    release["url"] = json_release["html_url"];
    release["name"] = json_release["name"];
    release["prerelease"] = json_release["prerelease"];
    release["created"] = json_release["created_at"];
    release["published"] = json_release["published_at"];
    release["formatted_time"] = json_release["created_at"];
    release["jar"] = "";
    release["win"] = "";
    release["unix"] = "";
    release["mac"] = "";
    release["zip"] = "";
    release["source"] = json_release["zipball_url"];
    release["changelog"] = "";
    release["version_file"] = "";
    release["description"] = json_release["body"];
    var assets = [];
    json_release["assets"].forEach(function (json_asset) {
      var asset = {};
      asset["name"] = json_asset["name"];
      asset["date"] = json_asset["updated_at"];
      asset["url"] = json_asset["browser_download_url"];
      
      if (json_asset["name"].indexOf("_windows-x64_") > 0) {
        release["win"] = json_asset["browser_download_url"];
      }
      if (json_asset["name"].indexOf("_unix_") > 0) {
        release["unix"] = json_asset["browser_download_url"];
      }
      if (json_asset["name"].indexOf("_macos_") > 0) {
        release["macos"] = json_asset["browser_download_url"];
      }
      if (json_asset["name"].endsWith(".zip")) {
        release["zip"] = json_asset["browser_download_url"];
      }
      if (json_asset["name"].endsWith(".jar")) {
        release["jar"] = json_asset["browser_download_url"];
      }
      if (json_asset["name"] === "CHANGELOG.txt") {
        release["changelog"] = json_asset["browser_download_url"];
      }
      if (json_asset["name"] === "VERSION") {
        release["version_file"] = json_asset["browser_download_url"];
      }
      assets.push(asset);
    });
    
    release["assets"] = assets;
    release["original"] = json_release;
    
    var htmlelement = document.getElementById("release_changelog_link");
    if (htmlelement && release["changelog"]) htmlelement.innerHTML = '<a href="'+release["changelog"]+'">CHANGELOG</a>';

    var htmlelement = document.getElementById("release_version");
    if (htmlelement) htmlelement.innerHTML = release["version"];

    var htmlelement = document.getElementById("release_time");
    if (htmlelement) htmlelement.innerHTML = release["formatted_time"];

    href("release_link_jar",release["jar"],"Installer JAR");
    href("release_link_windows",release["win"],"Windows Installer");
    href("release_link_unix",release["unix"],"Shell Installer");
    href("release_link_macos",release["macos"],"MAC OS Installer");
    href("release_link_zip",release["zip"],"ZIP File");
    href("release_link_source",release["source"],"Source code at github (for developers)");
  });
}

get_magellan_release();

function get_plugin_release() {
  getJSON("https://api.github.com/repos/magellan2/magellan2-extensions-plugins/releases/latest", function(json_release) {
    if (json_release["draft"]) return;
    if (json_release["prerelease"]) return;

    var release = {};
    release["tag"] = json_release["tag_name"];
    release["version"] = json_release["tag_name"];
    release["url"] = json_release["html_url"];
    release["name"] = json_release["name"];
    release["prerelease"] = json_release["prerelease"];
    release["created"] = json_release["created_at"];
    release["published"] = json_release["published_at"];
    release["formatted_time"] = json_release["created_at"];
    release["source"] = json_release["zipball_url"];
    release["description"] = json_release["body"];
    release["jar_alliance"] = "";
    release["zip_alliance"] = "";
    release["jar_lighthouseicons"] = "";
    release["zip_lighthouseicons"] = "";
    release["jar_mapcleaner"] = "";
    release["zip_mapcleaner"] = "";
    release["jar_mapicons"] = "";
    release["zip_mapicons"] = "";
    release["jar_memorywatch"] = "";
    release["zip_memorywatch"] = "";
    release["jar_shiploader"] = "";
    release["zip_shiploader"] = "";
    release["jar_teacher"] = "";
    release["zip_teacher"] = "";
    release["jar_statistics"] = "";
    release["zip_statistics"] = "";
    var assets = [];
    json_release["assets"].forEach(function (json_asset) {
      var asset = {};
      asset["name"] = json_asset["name"];
      asset["date"] = json_asset["updated_at"];
      asset["url"] = json_asset["browser_download_url"];
      
      var plugin = "";
      if (json_asset["name"].startsWith("alliance-")) {
        plugin = "alliance";
      } else if (json_asset["name"].startsWith("lighthouseicons-")) {
        plugin = "lighthouseicons";
      } else if (json_asset["name"].startsWith("mapcleaner-")) {
        plugin = "mapcleaner";
      } else if (json_asset["name"].startsWith("mapicons-")) {
        plugin = "mapicons";
      } else if (json_asset["name"].startsWith("memorywatch-")) {
        plugin = "memorywatch";
      } else if (json_asset["name"].startsWith("shiploader-")) {
        plugin = "shiploader";
      } else if (json_asset["name"].startsWith("statistics-")) {
        plugin = "statistics";
      } else if (json_asset["name"].startsWith("teacher-")) {
        plugin = "teacher";
      } else {
        return;
      }
      
      if (json_asset["name"].endsWith(".zip")) {
        release["zip_"+plugin] = json_asset["browser_download_url"];
      }
      if (json_asset["name"].endsWith("installer.jar")) {
        release["jar_"+plugin] = json_asset["browser_download_url"];
      }
      if (json_asset["name"] === "CHANGELOG.txt") {
        release["changelog"] = json_asset["browser_download_url"];
      }
      if (json_asset["name"] === "VERSION") {
        release["version_file"] = json_asset["browser_download_url"];
      }
      assets.push(asset);
    });
    
    release["assets"] = assets;
    
    href("release_plugin_mapcleaner_installer",release["jar_mapcleaner"],"Installer JAR");
    href("release_plugin_memorywatch_installer",release["jar_memorywatch"],"Installer JAR");
    href("release_plugin_statistics_installer",release["jar_statistics"],"Installer JAR");
    href("release_plugin_teacher_installer",release["jar_teacher"],"Installer JAR");
    href("release_plugin_shiploader_installer",release["jar_shiploader"],"Installer JAR");
    href("release_plugin_mapicons_installer",release["jar_mapicons"],"Installer JAR");
    href("release_plugin_lighthouseicons_installer",release["jar_lighthouseicons"],"Installer JAR");

   // console.log(release);
  });
}

get_plugin_release();
