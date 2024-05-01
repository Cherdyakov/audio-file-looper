function write_path(in_path)
{
	var path = in_path
	var dir = path.substring(0, path.lastIndexOf("/") + 1)
	var out = dir + "audio_files.txt"
	outlet(0, out)
}