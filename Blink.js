#pragma strict

var topLid : GameObject;
var bottomLid : GameObject;

var timer : float = 10.0;

private var blink : boolean = false;

function Start()
{
	topLid = GameObject.Find("EyeLid_Top");
	bottomLid = GameObject.Find("EyeLid_Bottom");
}

function Update()
{
	timer -= Time.deltaTime;
	
	if(timer <= 0)
	{
		timer = 2;
		blink = true;
	}
	
	if(blink == true)
	{
		topLid.animation.Play("BlinkTop");
		bottomLid.animation.Play("BlinkBottom");
		blink = false;
	}
}