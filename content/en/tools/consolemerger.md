
# Console Merger

| | |
| ---: | --- |
| Name: | Console Merger Tool |
| Version: | 1.0.1 |
| Kurzbeschreibung: | This is a command line tool for merging Eressea reports. This tool needs Java 6 and at least two reports. |
| Autor: | Thoralf |
| Website: | - |
| Download: | [hier](/de/download/#tools) |


Syntax:

    java magellan.ext.console.merge.ConsoleMerger Parameter

Parameters: magellan_dir base_report merge_report result_report

* magellan_dir - the directory that contains the Magellan settings (rules and resources).
* base_report - the original report.
* merge_report - the report that should be merged to base_report
* result_report - the destination file. If the file exists, it will be overwritten.

alternative syntax:

    java -jar consolemerger.jar Parameter

This program is aware of the file name extension and loads and saves the file
in the given format.
