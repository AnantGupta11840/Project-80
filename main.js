
	name_of_the_student_array = [];
	
	function submit()
	{
        
        var name_1 = document.getElementById("name_of_the_student_1").value;


        name_of_the_student_array.push(name_1);

		console.log(name_of_the_student_array);
		
        document.getElementById("display_name").innerHTML = name_of_the_student_array;
        document.getElementById("submit_button").style.display = "none";
        document.getElementById("sort_button").style.display = "inline-block";

	}

function search()
{
	name_of_the_student_array.search();
    console.log(name_of_the_student_array);
	document.getElementById("display_name").innerHTML = name_of_the_student_array;
}
