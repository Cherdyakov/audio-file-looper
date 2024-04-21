function bang()
{
	var path = this.patcher.parentpatcher.filepath
	var dir = path.substring(0, path.lastIndexOf("/") + 1)
	var out = dir + "audio_files.txt"
	outlet(0, out)
}
