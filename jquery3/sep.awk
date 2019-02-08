BEGIN{
	FS = ",";
	count = 1;
}
{
	if ($1 == count){
		print($0);
		count++;

	}
}
