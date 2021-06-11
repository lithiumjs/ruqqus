// Using mouse

document.body.addEventListener('mousedown', function() {
	document.body.classList.add('using-mouse');
});

document.body.addEventListener('keydown', function(event) {
	if (event.keyCode === 9) {
		document.body.classList.remove('using-mouse');
	}
});

// 2FA toggle modal

$('#2faModal').on('hidden.bs.modal', function () {

	var box = document.getElementById("2faToggle");
	
	box.checked = !box.checked;

});

//email change

// Show confirm password field when user clicks email box

$('#new_email').on('input', function () {

	var id = document.getElementById("email-password");
	var id2 = document.getElementById("email-password-label");
	var id3 = document.getElementById("emailpasswordRequired");

	id.classList.remove("d-none");
	id2.classList.remove("d-none");
	id3.classList.remove("d-none");

});

//GIFS

	// Identify which comment form to insert GIF into

	var commentFormID;

	function commentForm(form) {
		commentFormID = form;
	};


	// Insert EMOJI markdown into comment box function

	function getEmoji(searchTerm) {

	var emoji = ' :'+searchTerm+': '
		
	var commentBox = document.getElementById(commentFormID);

	var old	= commentBox.value;

	commentBox.value = old + emoji;

	}

	function loadEmojis() {
		
		var container = document.getElementById('EMOJIS');

		container.innerHTML = '<a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'chad\')"><img width=30 src="/assets/images/emojis/chad.gif"><span class="tooltiptext">:chad:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'2thumbsup\')"><img width=30 src="/assets/images/emojis/2thumbsup.gif"><span class="tooltiptext">:2thumbsup:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'aliendj\')"><img width=30 src="/assets/images/emojis/aliendj.gif"><span class="tooltiptext">:aliendj:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'ambulance\')"><img width=30 src="/assets/images/emojis/ambulance.gif"><span class="tooltiptext">:ambulance:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'angry\')"><img width=30 src="/assets/images/emojis/angry.gif"><span class="tooltiptext">:angry:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'angrywhip\')"><img width=30 src="/assets/images/emojis/angrywhip.gif"><span class="tooltiptext">:angrywhip:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'argue\')"><img width=30 src="/assets/images/emojis/argue.gif"><span class="tooltiptext">:argue:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'aroused\')"><img width=30 src="/assets/images/emojis/aroused.gif"><span class="tooltiptext">:aroused:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'ashamed\')"><img width=30 src="/assets/images/emojis/ashamed.gif"><span class="tooltiptext">:ashamed:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'badass\')"><img width=30 src="/assets/images/emojis/badass.gif"><span class="tooltiptext">:badass:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'banana\')"><img width=30 src="/assets/images/emojis/banana.gif"><span class="tooltiptext">:banana:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'band\')"><img width=30 src="/assets/images/emojis/band.gif"><span class="tooltiptext">:band:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'banghead\')"><img width=30 src="/assets/images/emojis/banghead.gif"><span class="tooltiptext">:banghead:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'batman\')"><img width=30 src="/assets/images/emojis/batman.gif"><span class="tooltiptext">:batman:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'bigeyes\')"><img width=30 src="/assets/images/emojis/bigeyes.gif"><span class="tooltiptext">:bigeyes:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'bite\')"><img width=30 src="/assets/images/emojis/bite.gif"><span class="tooltiptext">:bite:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'blind\')"><img width=30 src="/assets/images/emojis/blind.gif"><span class="tooltiptext">:blind:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'blowkiss\')"><img width=30 src="/assets/images/emojis/blowkiss.gif"><span class="tooltiptext">:blowkiss:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'blush\')"><img width=30 src="/assets/images/emojis/blush.gif"><span class="tooltiptext">:blush:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'bong\')"><img width=30 src="/assets/images/emojis/bong.gif"><span class="tooltiptext">:bong:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'bounce\')"><img width=30 src="/assets/images/emojis/bounce.gif"><span class="tooltiptext">:bounce:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'bow\')"><img width=30 src="/assets/images/emojis/bow.gif"><span class="tooltiptext">:bow:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'breakheart\')"><img width=30 src="/assets/images/emojis/breakheart.gif"><span class="tooltiptext">:breakheart:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'bs\')"><img width=30 src="/assets/images/emojis/bs.gif"><span class="tooltiptext">:bs:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'cartwheel\')"><img width=30 src="/assets/images/emojis/cartwheel.gif"><span class="tooltiptext">:cartwheel:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'cat\')"><img width=30 src="/assets/images/emojis/cat.gif"><span class="tooltiptext">:cat:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'celebrate\')"><img width=30 src="/assets/images/emojis/celebrate.gif"><span class="tooltiptext">:celebrate:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'chainsaw\')"><img width=30 src="/assets/images/emojis/chainsaw.gif"><span class="tooltiptext">:chainsaw:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'cheers\')"><img width=30 src="/assets/images/emojis/cheers.gif"><span class="tooltiptext">:cheers:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'clap\')"><img width=30 src="/assets/images/emojis/clap.gif"><span class="tooltiptext">:clap:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'cold\')"><img width=30 src="/assets/images/emojis/cold.gif"><span class="tooltiptext">:cold:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'confused\')"><img width=30 src="/assets/images/emojis/confused.gif"><span class="tooltiptext">:confused:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'crazyeyes\')"><img width=30 src="/assets/images/emojis/crazyeyes.gif"><span class="tooltiptext">:crazyeyes:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'cry\')"><img width=30 src="/assets/images/emojis/cry.gif"><span class="tooltiptext">:cry:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'cthulhu\')"><img width=30 src="/assets/images/emojis/cthulhu.gif"><span class="tooltiptext">:cthulhu:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'cute\')"><img width=30 src="/assets/images/emojis/cute.gif"><span class="tooltiptext">:cute:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'D\')"><img width=30 src="/assets/images/emojis/D.gif"><span class="tooltiptext">:D:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'daydream\')"><img width=30 src="/assets/images/emojis/daydream.gif"><span class="tooltiptext">:daydream:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'ddr\')"><img width=30 src="/assets/images/emojis/ddr.gif"><span class="tooltiptext">:ddr:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'deadpool\')"><img width=30 src="/assets/images/emojis/deadpool.gif"><span class="tooltiptext">:deadpool:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'devilsmile\')"><img width=30 src="/assets/images/emojis/devilsmile.gif"><span class="tooltiptext">:devilsmile:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'diddle\')"><img width=30 src="/assets/images/emojis/diddle.gif"><span class="tooltiptext">:diddle:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'die\')"><img width=30 src="/assets/images/emojis/die.gif"><span class="tooltiptext">:die:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'distress\')"><img width=30 src="/assets/images/emojis/distress.gif"><span class="tooltiptext">:distress:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'disturbing\')"><img width=30 src="/assets/images/emojis/disturbing.gif"><span class="tooltiptext">:disturbing:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'dizzy\')"><img width=30 src="/assets/images/emojis/dizzy.gif"><span class="tooltiptext">:dizzy:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'domo\')"><img width=30 src="/assets/images/emojis/domo.gif"><span class="tooltiptext">:domo:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'doughboy\')"><img width=30 src="/assets/images/emojis/doughboy.gif"><span class="tooltiptext">:doughboy:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'drink\')"><img width=30 src="/assets/images/emojis/drink.gif"><span class="tooltiptext">:drink:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'drool\')"><img width=30 src="/assets/images/emojis/drool.gif"><span class="tooltiptext">:drool:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'dudeweedlmao\')"><img width=30 src="/assets/images/emojis/dudeweedlmao.gif"><span class="tooltiptext">:dudeweedlmao:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'edward\')"><img width=30 src="/assets/images/emojis/edward.gif"><span class="tooltiptext">:edward:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'electro\')"><img width=30 src="/assets/images/emojis/electro.gif"><span class="tooltiptext">:electro:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'elephant\')"><img width=30 src="/assets/images/emojis/elephant.gif"><span class="tooltiptext">:elephant:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'embarrassed\')"><img width=30 src="/assets/images/emojis/embarrassed.gif"><span class="tooltiptext">:embarrassed:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'emo\')"><img width=30 src="/assets/images/emojis/emo.gif"><span class="tooltiptext">:emo:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'emo2\')"><img width=30 src="/assets/images/emojis/emo2.gif"><span class="tooltiptext">:emo2:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'evil\')"><img width=30 src="/assets/images/emojis/evil.gif"><span class="tooltiptext">:evil:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'evilclown\')"><img width=30 src="/assets/images/emojis/evilclown.gif"><span class="tooltiptext">:evilclown:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'evilgrin\')"><img width=30 src="/assets/images/emojis/evilgrin.gif"><span class="tooltiptext">:evilgrin:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'facepalm\')"><img width=30 src="/assets/images/emojis/facepalm.gif"><span class="tooltiptext">:facepalm:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'fap\')"><img width=30 src="/assets/images/emojis/fap.gif"><span class="tooltiptext">:fap:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'flamethrower\')"><img width=30 src="/assets/images/emojis/flamethrower.gif"><span class="tooltiptext">:flamethrower:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'flipbird\')"><img width=30 src="/assets/images/emojis/flipbird.gif"><span class="tooltiptext">:flipbird:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'flirt\')"><img width=30 src="/assets/images/emojis/flirt.gif"><span class="tooltiptext">:flirt:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'frown\')"><img width=30 src="/assets/images/emojis/frown.gif"><span class="tooltiptext">:frown:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'gasp\')"><img width=30 src="/assets/images/emojis/gasp.gif"><span class="tooltiptext">:gasp:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'glomp\')"><img width=30 src="/assets/images/emojis/glomp.gif"><span class="tooltiptext">:glomp:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'go\')"><img width=30 src="/assets/images/emojis/go.gif"><span class="tooltiptext">:go:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'gooby\')"><img width=30 src="/assets/images/emojis/gooby.gif"><span class="tooltiptext">:gooby:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'grr\')"><img width=30 src="/assets/images/emojis/grr.gif"><span class="tooltiptext">:grr:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'gtfo\')"><img width=30 src="/assets/images/emojis/gtfo.gif"><span class="tooltiptext">:gtfo:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'guitar\')"><img width=30 src="/assets/images/emojis/guitar.gif"><span class="tooltiptext">:guitar:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'haha\')"><img width=30 src="/assets/images/emojis/haha.gif"><span class="tooltiptext">:haha:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'handshake\')"><img width=30 src="/assets/images/emojis/handshake.gif"><span class="tooltiptext">:handshake:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'happydance\')"><img width=30 src="/assets/images/emojis/happydance.gif"><span class="tooltiptext">:happydance:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'headbang\')"><img width=30 src="/assets/images/emojis/headbang.gif"><span class="tooltiptext">:headbang:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'heart\')"><img width=30 src="/assets/images/emojis/heart.gif"><span class="tooltiptext">:heart:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'heartbeat\')"><img width=30 src="/assets/images/emojis/heartbeat.gif"><span class="tooltiptext">:heartbeat:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'hearts\')"><img width=30 src="/assets/images/emojis/hearts.gif"><span class="tooltiptext">:hearts:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'highfive\')"><img width=30 src="/assets/images/emojis/highfive.gif"><span class="tooltiptext">:highfive:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'hmm\')"><img width=30 src="/assets/images/emojis/hmm.gif"><span class="tooltiptext">:hmm:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'hmph\')"><img width=30 src="/assets/images/emojis/hmph.gif"><span class="tooltiptext">:hmph:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'holdhands\')"><img width=30 src="/assets/images/emojis/holdhands.gif"><span class="tooltiptext">:holdhands:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'horny\')"><img width=30 src="/assets/images/emojis/horny.gif"><span class="tooltiptext">:horny:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'hug\')"><img width=30 src="/assets/images/emojis/hug.gif"><span class="tooltiptext">:hug:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'hugging\')"><img width=30 src="/assets/images/emojis/hugging.gif"><span class="tooltiptext">:hugging:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'hugs\')"><img width=30 src="/assets/images/emojis/hugs.gif"><span class="tooltiptext">:hugs:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'hump\')"><img width=30 src="/assets/images/emojis/hump.gif"><span class="tooltiptext">:hump:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'humpbed\')"><img width=30 src="/assets/images/emojis/humpbed.gif"><span class="tooltiptext">:humpbed:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'hysterical\')"><img width=30 src="/assets/images/emojis/hysterical.gif"><span class="tooltiptext">:hysterical:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'ily\')"><img width=30 src="/assets/images/emojis/ily.gif"><span class="tooltiptext">:ily:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'inlove\')"><img width=30 src="/assets/images/emojis/inlove.gif"><span class="tooltiptext">:inlove:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'jason\')"><img width=30 src="/assets/images/emojis/jason.gif"><span class="tooltiptext">:jason:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'jawdrop\')"><img width=30 src="/assets/images/emojis/jawdrop.gif"><span class="tooltiptext">:jawdrop:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'jedi\')"><img width=30 src="/assets/images/emojis/jedi.gif"><span class="tooltiptext">:jedi:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'jester\')"><img width=30 src="/assets/images/emojis/jester.gif"><span class="tooltiptext">:jester:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'kaboom\')"><img width=30 src="/assets/images/emojis/kaboom.gif"><span class="tooltiptext">:kaboom:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'kick\')"><img width=30 src="/assets/images/emojis/kick.gif"><span class="tooltiptext">:kick:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'kiss\')"><img width=30 src="/assets/images/emojis/kiss.gif"><span class="tooltiptext">:kiss:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'kitty\')"><img width=30 src="/assets/images/emojis/kitty.gif"><span class="tooltiptext">:kitty:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'laughchair\')"><img width=30 src="/assets/images/emojis/laughchair.gif"><span class="tooltiptext">:laughchair:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'lick\')"><img width=30 src="/assets/images/emojis/lick.gif"><span class="tooltiptext">:lick:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'lol\')"><img width=30 src="/assets/images/emojis/lol.gif"><span class="tooltiptext">:lol:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'lolbeat\')"><img width=30 src="/assets/images/emojis/lolbeat.gif"><span class="tooltiptext">:lolbeat:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'loving\')"><img width=30 src="/assets/images/emojis/loving.gif"><span class="tooltiptext">:loving:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'makeout\')"><img width=30 src="/assets/images/emojis/makeout.gif"><span class="tooltiptext">:makeout:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseyangel\')"><img width=30 src="/assets/images/emojis/marseyangel.gif"><span class="tooltiptext">:marseyangel:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseyblowkiss\')"><img width=30 src="/assets/images/emojis/marseyblowkiss.gif"><span class="tooltiptext">:marseyblowkiss:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseycry\')"><img width=30 src="/assets/images/emojis/marseycry.gif"><span class="tooltiptext">:marseycry:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseydead\')"><img width=30 src="/assets/images/emojis/marseydead.gif"><span class="tooltiptext">:marseydead:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseyexcited\')"><img width=30 src="/assets/images/emojis/marseyexcited.gif"><span class="tooltiptext">:marseyexcited:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseygift\')"><img width=30 src="/assets/images/emojis/marseygift.gif"><span class="tooltiptext">:marseygift:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseyinabox\')"><img width=30 src="/assets/images/emojis/marseyinabox.gif"><span class="tooltiptext">:marseyinabox:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseylaugh\')"><img width=30 src="/assets/images/emojis/marseylaugh.gif"><span class="tooltiptext">:marseylaugh:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseylove\')"><img width=30 src="/assets/images/emojis/marseylove.gif"><span class="tooltiptext">:marseylove:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseymad\')"><img width=30 src="/assets/images/emojis/marseymad.gif"><span class="tooltiptext">:marseymad:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseyparty\')"><img width=30 src="/assets/images/emojis/marseyparty.gif"><span class="tooltiptext">:marseyparty:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseyrain\')"><img width=30 src="/assets/images/emojis/marseyrain.gif"><span class="tooltiptext">:marseyrain:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseyreading\')"><img width=30 src="/assets/images/emojis/marseyreading.gif"><span class="tooltiptext">:marseyreading:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseyready\')"><img width=30 src="/assets/images/emojis/marseyready.gif"><span class="tooltiptext">:marseyready:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseysad\')"><img width=30 src="/assets/images/emojis/marseysad.gif"><span class="tooltiptext">:marseysad:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseyscarf\')"><img width=30 src="/assets/images/emojis/marseyscarf.gif"><span class="tooltiptext">:marseyscarf:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseyshook\')"><img width=30 src="/assets/images/emojis/marseyshook.gif"><span class="tooltiptext">:marseyshook:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseysick\')"><img width=30 src="/assets/images/emojis/marseysick.gif"><span class="tooltiptext">:marseysick:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseysleep\')"><img width=30 src="/assets/images/emojis/marseysleep.gif"><span class="tooltiptext">:marseysleep:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseythumbsup\')"><img width=30 src="/assets/images/emojis/marseythumbsup.gif"><span class="tooltiptext">:marseythumbsup:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'marseywave\')"><img width=30 src="/assets/images/emojis/marseywave.gif"><span class="tooltiptext">:marseywave:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'medal\')"><img width=30 src="/assets/images/emojis/medal.gif"><span class="tooltiptext">:medal:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'megaman\')"><img width=30 src="/assets/images/emojis/megaman.gif"><span class="tooltiptext">:megaman:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'megamanguitar\')"><img width=30 src="/assets/images/emojis/megamanguitar.gif"><span class="tooltiptext">:megamanguitar:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'meow\')"><img width=30 src="/assets/images/emojis/meow.gif"><span class="tooltiptext">:meow:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'metime\')"><img width=30 src="/assets/images/emojis/metime.gif"><span class="tooltiptext">:metime:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'mooning\')"><img width=30 src="/assets/images/emojis/mooning.gif"><span class="tooltiptext">:mooning:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'mummy\')"><img width=30 src="/assets/images/emojis/mummy.gif"><span class="tooltiptext">:mummy:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'na\')"><img width=30 src="/assets/images/emojis/na.gif"><span class="tooltiptext">:na:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'nauseous\')"><img width=30 src="/assets/images/emojis/nauseous.gif"><span class="tooltiptext">:nauseous:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'nervous\')"><img width=30 src="/assets/images/emojis/nervous.gif"><span class="tooltiptext">:nervous:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'ninja\')"><img width=30 src="/assets/images/emojis/ninja.gif"><span class="tooltiptext">:ninja:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'nod\')"><img width=30 src="/assets/images/emojis/nod.gif"><span class="tooltiptext">:nod:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'nono\')"><img width=30 src="/assets/images/emojis/nono.gif"><span class="tooltiptext">:nono:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'omg\')"><img width=30 src="/assets/images/emojis/omg.gif"><span class="tooltiptext">:omg:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'onfire\')"><img width=30 src="/assets/images/emojis/onfire.gif"><span class="tooltiptext">:onfire:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'ooo\')"><img width=30 src="/assets/images/emojis/ooo.gif"><span class="tooltiptext">:ooo:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'p\')"><img width=30 src="/assets/images/emojis/p.gif"><span class="tooltiptext">:p:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'paddle\')"><img width=30 src="/assets/images/emojis/paddle.gif"><span class="tooltiptext">:paddle:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'panda\')"><img width=30 src="/assets/images/emojis/panda.gif"><span class="tooltiptext">:panda:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'pandabutt\')"><img width=30 src="/assets/images/emojis/pandabutt.gif"><span class="tooltiptext">:pandabutt:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'paranoid\')"><img width=30 src="/assets/images/emojis/paranoid.gif"><span class="tooltiptext">:paranoid:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'party\')"><img width=30 src="/assets/images/emojis/party.gif"><span class="tooltiptext">:party:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'pat\')"><img width=30 src="/assets/images/emojis/pat.gif"><span class="tooltiptext">:pat:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'peek\')"><img width=30 src="/assets/images/emojis/peek.gif"><span class="tooltiptext">:peek:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'pikachu\')"><img width=30 src="/assets/images/emojis/pikachu.gif"><span class="tooltiptext">:pikachu:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'pimp\')"><img width=30 src="/assets/images/emojis/pimp.gif"><span class="tooltiptext">:pimp:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'platyblush\')"><img width=30 src="/assets/images/emojis/platyblush.gif"><span class="tooltiptext">:platyblush:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'platybruh\')"><img width=30 src="/assets/images/emojis/platybruh.gif"><span class="tooltiptext">:platybruh:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'platycaveman\')"><img width=30 src="/assets/images/emojis/platycaveman.gif"><span class="tooltiptext">:platycaveman:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'platycheer\')"><img width=30 src="/assets/images/emojis/platycheer.gif"><span class="tooltiptext">:platycheer:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'platydown\')"><img width=30 src="/assets/images/emojis/platydown.gif"><span class="tooltiptext">:platydown:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'platyeyes\')"><img width=30 src="/assets/images/emojis/platyeyes.gif"><span class="tooltiptext">:platyeyes:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'platyheart\')"><img width=30 src="/assets/images/emojis/platyheart.gif"><span class="tooltiptext">:platyheart:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'platylol\')"><img width=30 src="/assets/images/emojis/platylol.gif"><span class="tooltiptext">:platylol:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'platymicdrop\')"><img width=30 src="/assets/images/emojis/platymicdrop.gif"><span class="tooltiptext">:platymicdrop:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'platynooo\')"><img width=30 src="/assets/images/emojis/platynooo.gif"><span class="tooltiptext">:platynooo:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'platysalute\')"><img width=30 src="/assets/images/emojis/platysalute.gif"><span class="tooltiptext">:platysalute:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'platyseethe\')"><img width=30 src="/assets/images/emojis/platyseethe.gif"><span class="tooltiptext">:platyseethe:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'platythumbsup\')"><img width=30 src="/assets/images/emojis/platythumbsup.gif"><span class="tooltiptext">:platythumbsup:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'platywave\')"><img width=30 src="/assets/images/emojis/platywave.gif"><span class="tooltiptext">:platywave:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'plzdie\')"><img width=30 src="/assets/images/emojis/plzdie.gif"><span class="tooltiptext">:plzdie:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'poke\')"><img width=30 src="/assets/images/emojis/poke.gif"><span class="tooltiptext">:poke:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'popcorn\')"><img width=30 src="/assets/images/emojis/popcorn.gif"><span class="tooltiptext">:popcorn:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'pout\')"><img width=30 src="/assets/images/emojis/pout.gif"><span class="tooltiptext">:pout:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'probe\')"><img width=30 src="/assets/images/emojis/probe.gif"><span class="tooltiptext">:probe:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'puke\')"><img width=30 src="/assets/images/emojis/puke.gif"><span class="tooltiptext">:puke:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'punch\')"><img width=30 src="/assets/images/emojis/punch.gif"><span class="tooltiptext">:punch:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'quote\')"><img width=30 src="/assets/images/emojis/quote.gif"><span class="tooltiptext">:quote:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'raccoon\')"><img width=30 src="/assets/images/emojis/raccoon.gif"><span class="tooltiptext">:raccoon:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'roar\')"><img width=30 src="/assets/images/emojis/roar.gif"><span class="tooltiptext">:roar:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'rofl\')"><img width=30 src="/assets/images/emojis/rofl.gif"><span class="tooltiptext">:rofl:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'roflmao\')"><img width=30 src="/assets/images/emojis/roflmao.gif"><span class="tooltiptext">:roflmao:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'rolleyes\')"><img width=30 src="/assets/images/emojis/rolleyes.gif"><span class="tooltiptext">:rolleyes:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'sad\')"><img width=30 src="/assets/images/emojis/sad.gif"><span class="tooltiptext">:sad:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'sadeyes\')"><img width=30 src="/assets/images/emojis/sadeyes.gif"><span class="tooltiptext">:sadeyes:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'sadhug\')"><img width=30 src="/assets/images/emojis/sadhug.gif"><span class="tooltiptext">:sadhug:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'samurai\')"><img width=30 src="/assets/images/emojis/samurai.gif"><span class="tooltiptext">:samurai:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'sarcasm\')"><img width=30 src="/assets/images/emojis/sarcasm.gif"><span class="tooltiptext">:sarcasm:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'scoot\')"><img width=30 src="/assets/images/emojis/scoot.gif"><span class="tooltiptext">:scoot:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'scream\')"><img width=30 src="/assets/images/emojis/scream.gif"><span class="tooltiptext">:scream:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'shmoopy\')"><img width=30 src="/assets/images/emojis/shmoopy.gif"><span class="tooltiptext">:shmoopy:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'shrug\')"><img width=30 src="/assets/images/emojis/shrug.gif"><span class="tooltiptext">:shrug:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'skull\')"><img width=30 src="/assets/images/emojis/skull.gif"><span class="tooltiptext">:skull:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'slap\')"><img width=30 src="/assets/images/emojis/slap.gif"><span class="tooltiptext">:slap:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'slapfight\')"><img width=30 src="/assets/images/emojis/slapfight.gif"><span class="tooltiptext">:slapfight:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'sleepy\')"><img width=30 src="/assets/images/emojis/sleepy.gif"><span class="tooltiptext">:sleepy:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'smackfish\')"><img width=30 src="/assets/images/emojis/smackfish.gif"><span class="tooltiptext">:smackfish:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'smackhead\')"><img width=30 src="/assets/images/emojis/smackhead.gif"><span class="tooltiptext">:smackhead:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'smh\')"><img width=30 src="/assets/images/emojis/smh.gif"><span class="tooltiptext">:smh:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'smile\')"><img width=30 src="/assets/images/emojis/smile.gif"><span class="tooltiptext">:smile:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'smoke\')"><img width=30 src="/assets/images/emojis/smoke.gif"><span class="tooltiptext">:smoke:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'sonic\')"><img width=30 src="/assets/images/emojis/sonic.gif"><span class="tooltiptext">:sonic:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'spank\')"><img width=30 src="/assets/images/emojis/spank.gif"><span class="tooltiptext">:spank:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'sparta\')"><img width=30 src="/assets/images/emojis/sparta.gif"><span class="tooltiptext">:sparta:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'sperm\')"><img width=30 src="/assets/images/emojis/sperm.gif"><span class="tooltiptext">:sperm:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'spiderman\')"><img width=30 src="/assets/images/emojis/spiderman.gif"><span class="tooltiptext">:spiderman:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'stab\')"><img width=30 src="/assets/images/emojis/stab.gif"><span class="tooltiptext">:stab:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'star\')"><img width=30 src="/assets/images/emojis/star.gif"><span class="tooltiptext">:star:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'stare\')"><img width=30 src="/assets/images/emojis/stare.gif"><span class="tooltiptext">:stare:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'stfu\')"><img width=30 src="/assets/images/emojis/stfu.gif"><span class="tooltiptext">:stfu:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'suicide\')"><img width=30 src="/assets/images/emojis/suicide.gif"><span class="tooltiptext">:suicide:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'surprisehug\')"><img width=30 src="/assets/images/emojis/surprisehug.gif"><span class="tooltiptext">:surprisehug:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'suspicious\')"><img width=30 src="/assets/images/emojis/suspicious.gif"><span class="tooltiptext">:suspicious:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'sweat\')"><img width=30 src="/assets/images/emojis/sweat.gif"><span class="tooltiptext">:sweat:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'swordfight\')"><img width=30 src="/assets/images/emojis/swordfight.gif"><span class="tooltiptext">:swordfight:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taco\')"><img width=30 src="/assets/images/emojis/taco.gif"><span class="tooltiptext">:taco:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'talk2hand\')"><img width=30 src="/assets/images/emojis/talk2hand.gif"><span class="tooltiptext">:talk2hand:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tantrum\')"><img width=30 src="/assets/images/emojis/tantrum.gif"><span class="tooltiptext">:tantrum:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayaaa\')"><img width=30 src="/assets/images/emojis/tayaaa.gif"><span class="tooltiptext">:tayaaa:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayadmire\')"><img width=30 src="/assets/images/emojis/tayadmire.gif"><span class="tooltiptext">:tayadmire:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taychefkiss\')"><img width=30 src="/assets/images/emojis/taychefkiss.gif"><span class="tooltiptext">:taychefkiss:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayflirt\')"><img width=30 src="/assets/images/emojis/tayflirt.gif"><span class="tooltiptext">:tayflirt:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taygrimacing\')"><img width=30 src="/assets/images/emojis/taygrimacing.gif"><span class="tooltiptext">:taygrimacing:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayhappy\')"><img width=30 src="/assets/images/emojis/tayhappy.gif"><span class="tooltiptext">:tayhappy:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayhmm\')"><img width=30 src="/assets/images/emojis/tayhmm.gif"><span class="tooltiptext">:tayhmm:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayhuh\')"><img width=30 src="/assets/images/emojis/tayhuh.gif"><span class="tooltiptext">:tayhuh:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayhyperdab\')"><img width=30 src="/assets/images/emojis/tayhyperdab.gif"><span class="tooltiptext">:tayhyperdab:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayjammin\')"><img width=30 src="/assets/images/emojis/tayjammin.gif"><span class="tooltiptext">:tayjammin:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taylaugh\')"><img width=30 src="/assets/images/emojis/taylaugh.gif"><span class="tooltiptext">:taylaugh:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayno\')"><img width=30 src="/assets/images/emojis/tayno.gif"><span class="tooltiptext">:tayno:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taynod\')"><img width=30 src="/assets/images/emojis/taynod.gif"><span class="tooltiptext">:taynod:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taypray\')"><img width=30 src="/assets/images/emojis/taypray.gif"><span class="tooltiptext">:taypray:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayscrunch\')"><img width=30 src="/assets/images/emojis/tayscrunch.gif"><span class="tooltiptext">:tayscrunch:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayslide\')"><img width=30 src="/assets/images/emojis/tayslide.gif"><span class="tooltiptext">:tayslide:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taytantrum\')"><img width=30 src="/assets/images/emojis/taytantrum.gif"><span class="tooltiptext">:taytantrum:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taytea\')"><img width=30 src="/assets/images/emojis/taytea.gif"><span class="tooltiptext">:taytea:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taythink\')"><img width=30 src="/assets/images/emojis/taythink.gif"><span class="tooltiptext">:taythink:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayvibin\')"><img width=30 src="/assets/images/emojis/tayvibin.gif"><span class="tooltiptext">:tayvibin:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taywhat\')"><img width=30 src="/assets/images/emojis/taywhat.gif"><span class="tooltiptext">:taywhat:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taywine\')"><img width=30 src="/assets/images/emojis/taywine.gif"><span class="tooltiptext">:taywine:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taywine2\')"><img width=30 src="/assets/images/emojis/taywine2.gif"><span class="tooltiptext">:taywine2:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taywink\')"><img width=30 src="/assets/images/emojis/taywink.gif"><span class="tooltiptext">:taywink:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'teehee\')"><img width=30 src="/assets/images/emojis/teehee.gif"><span class="tooltiptext">:teehee:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'thinking\')"><img width=30 src="/assets/images/emojis/thinking.gif"><span class="tooltiptext">:thinking:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'threesome\')"><img width=30 src="/assets/images/emojis/threesome.gif"><span class="tooltiptext">:threesome:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'throw\')"><img width=30 src="/assets/images/emojis/throw.gif"><span class="tooltiptext">:throw:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'throwaway\')"><img width=30 src="/assets/images/emojis/throwaway.gif"><span class="tooltiptext">:throwaway:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tickle\')"><img width=30 src="/assets/images/emojis/tickle.gif"><span class="tooltiptext">:tickle:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'typing\')"><img width=30 src="/assets/images/emojis/typing.gif"><span class="tooltiptext">:typing:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'uhuh\')"><img width=30 src="/assets/images/emojis/uhuh.gif"><span class="tooltiptext">:uhuh:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'vampbat\')"><img width=30 src="/assets/images/emojis/vampbat.gif"><span class="tooltiptext">:vampbat:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'viking\')"><img width=30 src="/assets/images/emojis/viking.gif"><span class="tooltiptext">:viking:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'violin\')"><img width=30 src="/assets/images/emojis/violin.gif"><span class="tooltiptext">:violin:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'vulgar\')"><img width=30 src="/assets/images/emojis/vulgar.gif"><span class="tooltiptext">:vulgar:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'wah\')"><img width=30 src="/assets/images/emojis/wah.gif"><span class="tooltiptext">:wah:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'wat\')"><img width=30 src="/assets/images/emojis/wat.gif"><span class="tooltiptext">:wat:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'whip\')"><img width=30 src="/assets/images/emojis/whip.gif"><span class="tooltiptext">:whip:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'whipping\')"><img width=30 src="/assets/images/emojis/whipping.gif"><span class="tooltiptext">:whipping:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'wink\')"><img width=30 src="/assets/images/emojis/wink.gif"><span class="tooltiptext">:wink:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'witch\')"><img width=30 src="/assets/images/emojis/witch.gif"><span class="tooltiptext">:witch:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'wizard\')"><img width=30 src="/assets/images/emojis/wizard.gif"><span class="tooltiptext">:wizard:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'woah\')"><img width=30 src="/assets/images/emojis/woah.gif"><span class="tooltiptext">:woah:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'woo\')"><img width=30 src="/assets/images/emojis/woo.gif"><span class="tooltiptext">:woo:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'work\')"><img width=30 src="/assets/images/emojis/work.gif"><span class="tooltiptext">:work:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'worship\')"><img width=30 src="/assets/images/emojis/worship.gif"><span class="tooltiptext">:worship:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'wow\')"><img width=30 src="/assets/images/emojis/wow.gif"><span class="tooltiptext">:wow:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'XD\')"><img width=30 src="/assets/images/emojis/XD.gif"><span class="tooltiptext">:XD:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'yay\')"><img width=30 src="/assets/images/emojis/yay.gif"><span class="tooltiptext">:yay:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'zzz\')"><img width=30 src="/assets/images/emojis/zzz.gif"><span class="tooltiptext">:zzz:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taycat\')"><img width=30 src="/assets/images/emojis/taycat.gif"><span class="tooltiptext">:taycat:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taycelebrate\')"><img width=30 src="/assets/images/emojis/taycelebrate.gif"><span class="tooltiptext">:taycelebrate:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taychristmas\')"><img width=30 src="/assets/images/emojis/taychristmas.gif"><span class="tooltiptext">:taychristmas:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayclap\')"><img width=30 src="/assets/images/emojis/tayclap.gif"><span class="tooltiptext">:tayclap:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taycold\')"><img width=30 src="/assets/images/emojis/taycold.gif"><span class="tooltiptext">:taycold:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taycrown\')"><img width=30 src="/assets/images/emojis/taycrown.gif"><span class="tooltiptext">:taycrown:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayflex\')"><img width=30 src="/assets/images/emojis/tayflex.gif"><span class="tooltiptext">:tayflex:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayheart\')"><img width=30 src="/assets/images/emojis/tayheart.gif"><span class="tooltiptext">:tayheart:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taymindblown\')"><img width=30 src="/assets/images/emojis/taymindblown.gif"><span class="tooltiptext">:taymindblown:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taypeace\')"><img width=30 src="/assets/images/emojis/taypeace.gif"><span class="tooltiptext">:taypeace:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayrun\')"><img width=30 src="/assets/images/emojis/tayrun.gif"><span class="tooltiptext">:tayrun:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayshake\')"><img width=30 src="/assets/images/emojis/tayshake.gif"><span class="tooltiptext">:tayshake:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayshrug\')"><img width=30 src="/assets/images/emojis/tayshrug.gif"><span class="tooltiptext">:tayshrug:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taysilly\')"><img width=30 src="/assets/images/emojis/taysilly.gif"><span class="tooltiptext">:taysilly:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taysmart\')"><img width=30 src="/assets/images/emojis/taysmart.gif"><span class="tooltiptext">:taysmart:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'taystop\')"><img width=30 src="/assets/images/emojis/taystop.gif"><span class="tooltiptext">:taystop:</span></a><a class="tooltip2 emojicard" href="javascript:void(0)" onclick="getEmoji(\'tayyes\')"><img width=30 src="/assets/images/emojis/tayyes.gif"><span class="tooltiptext">:tayyes:</span></a>'
	}

	function getGif(searchTerm) {

		if (searchTerm !== undefined) {
			document.getElementById('gifSearch').value = searchTerm;
		}
		else {
			document.getElementById('gifSearch').value = null;
		}

		// load more gifs div

		var loadGIFs = document.getElementById('gifs-load-more');

		// error message div

		var noGIFs = document.getElementById('no-gifs-found');

		// categories div

		var cats = document.getElementById('GIFcats');

		// container div

		var container = document.getElementById('GIFs');

		// modal body div

		var modalBody = document.getElementById('gif-modal-body')

		// UI buttons

		var backBtn = document.getElementById('gifs-back-btn');

		var cancelBtn = document.getElementById('gifs-cancel-btn');

		container.innerHTML = '';

		if (searchTerm == undefined) {
			container.innerHTML = '<div class="card" onclick="getGif(\'agree\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Agree</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/wGhYz3FHaRJgk/200w_d.gif"> </div> <div class="card" onclick="getGif(\'laugh\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Laugh</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/O5NyCibf93upy/200w_d.gif"> </div> <div class="card" onclick="getGif(\'confused\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Confused</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/200w_d.gif"> </div> <div class="card" onclick="getGif(\'sad\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Sad</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/ISOckXUybVfQ4/200w_d.gif"> </div> <div class="card" onclick="getGif(\'happy\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Happy</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/XR9Dp54ZC4dji/200w_d.gif"> </div> <div class="card" onclick="getGif(\'awesome\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Awesome</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/200w_d.gif"> </div> <div class="card" onclick="getGif(\'yes\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Yes</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/J336VCs1JC42zGRhjH/200w_d.gif"> </div> <div class="card" onclick="getGif(\'no\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">No</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/1zSz5MVw4zKg0/200w_d.gif"> </div> <div class="card" onclick="getGif(\'love\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Love</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/4N1wOi78ZGzSB6H7vK/200w_d.gif"> </div> <div class="card" onclick="getGif(\'please\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Please</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/qUIm5wu6LAAog/200w_d.gif"> </div> <div class="card" onclick="getGif(\'scared\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Scared</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/bEVKYB487Lqxy/200w_d.gif"> </div> <div class="card" onclick="getGif(\'angry\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Angry</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/12Pb87uq0Vwq2c/200w_d.gif"> </div> <div class="card" onclick="getGif(\'awkward\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Awkward</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/unFLKoAV3TkXe/200w_d.gif"> </div> <div class="card" onclick="getGif(\'cringe\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Cringe</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/1jDvQyhGd3L2g/200w_d.gif"> </div> <div class="card" onclick="getGif(\'omg\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">OMG</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/3o72F8t9TDi2xVnxOE/200w_d.gif"> </div> <div class="card" onclick="getGif(\'why\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Why</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/1M9fmo1WAFVK0/200w_d.gif"> </div> <div class="card" onclick="getGif(\'gross\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Gross</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/pVAMI8QYM42n6/200w_d.gif"> </div> <div class="card" onclick="getGif(\'meh\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Meh</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/xT77XTpyEzJ4OJO06c/200w_d.gif"> </div>'

			backBtn.innerHTML = null;

			cancelBtn.innerHTML = null;

			noGIFs.innerHTML = null;

			loadGIFs.innerHTML = null;
		}
		else {
			backBtn.innerHTML = '<button class="btn btn-link pl-0 pr-3" id="gifs-back-btn" onclick="getGif();"><i class="fas fa-long-arrow-left text-muted"></i></button>';

			cancelBtn.innerHTML = '<button class="btn btn-link pl-3 pr-0" id="gifs-cancel-btn" onclick="getGif();"><i class="fas fa-times text-muted"></i></button>';

			$.ajax({
				url: "/giphy?searchTerm=" + searchTerm + "&limit=48",
				type: "GET",
				success: function(response) {
				var max = response.data.length - 1 //length of response, minus 1 (cuz array starts at index 0)
				var randomNumber = Math.round(Math.random() * 6) //random number between 0 and max -1
				// GIF array
				var gifURL = [];

				// loop for fetching mutliple GIFs and creating the card divs
				if (max < 48 && max > 0) {
					for (var i = 0; i <= max; i++) {
						gifURL[i] = "https://media.giphy.com/media/" + response.data[i].id + "/200w_d.gif";
						if (response.data[i].username==''){
							container.innerHTML += ('<div class="card bg-white" style="overflow: hidden" data-dismiss="modal" aria-label="Close" onclick="insertGIF(\'' + 'https://media.giphy.com/media/' + response.data[i].id + '/100w.gif' + '\',\'' + commentFormID + '\')"><div class="gif-cat-overlay"></div><img class="img-fluid" src="' + gifURL[i] + '"></div>');
						}
						else {
							container.innerHTML += ('<div class="card bg-white" style="overflow: hidden" data-dismiss="modal" aria-label="Close" title="by '+response.data[i].username+' on GIPHY" onclick="insertGIF(\'' + 'https://media.giphy.com/media/' + response.data[i].id + '/100w.gif' + '\',\'' + commentFormID + '\')"><div class="gif-cat-overlay"></div><img class="img-fluid" src="' + gifURL[i] + '"></div>');
						}
						noGIFs.innerHTML = null;
						loadGIFs.innerHTML = '<div class="text-center py-3"><div class="mb-3"><i class="fad fa-grin-beam-sweat text-gray-500" style="font-size: 3.5rem;"></i></div><p class="font-weight-bold text-gray-500 mb-0">Thou&#39;ve reached the end of the list!</p></div>';
					}
				}
				else if (max <= 0) {
					noGIFs.innerHTML = '<div class="text-center py-3 mt-3"><div class="mb-3"><i class="fad fa-frown text-gray-500" style="font-size: 3.5rem;"></i></div><p class="font-weight-bold text-gray-500 mb-0">Aw shucks. No GIFs found...</p></div>';
					container.innerHTML = null;
					loadGIFs.innerHTML = null;
				}
				else {
					for (var i = 0; i <= 48; i++) {
						gifURL[i] = "https://media.giphy.com/media/" + response.data[i].id + "/200w_d.gif";
						if (response.data[i].username==''){
							container.innerHTML += ('<div class="card bg-white" style="overflow: hidden" data-dismiss="modal" aria-label="Close" onclick="insertGIF(\'' + 'https://media.giphy.com/media/' + response.data[i].id + '/100w.gif' + '\',\'' + commentFormID + '\')"><div class="gif-cat-overlay"></div><img class="img-fluid" src="' + gifURL[i] + '"></div>');
						}
						else {
							container.innerHTML += ('<div class="card bg-white" style="overflow: hidden" data-dismiss="modal" aria-label="Close" title="by '+response.data[i].username+' on GIPHY" onclick="insertGIF(\'' + 'https://media.giphy.com/media/' + response.data[i].id + '/100w.gif' + '\',\'' + commentFormID + '\')"><div class="gif-cat-overlay"></div><img class="img-fluid" src="' + gifURL[i] + '"></div>');
						}
						noGIFs.innerHTML = null;
						loadGIFs.innerHTML = '<div class="text-center py-3"><div class="mb-3"><i class="fad fa-grin-beam-sweat text-gray-500" style="font-size: 3.5rem;"></i></div><p class="font-weight-bold text-gray-500 mb-0">Thou&#39;ve reached the end of the list!</p></div>';
					}
				}
			},
			error: function(e) {
				alert(e);
			}
		});
		};
	}

	// Insert GIF markdown into comment box function

	function insertGIF(url,form) {

		var gif = "![](" + url +")";

		var commentBox = document.getElementById(form);

		var old	= commentBox.value;

		commentBox.value = old + gif;

	}

	// When GIF keyboard is hidden, hide all GIFs

	$('#gifModal').on('hidden.bs.modal', function (e) {

		document.getElementById('gifSearch').value = null;

		// load more gifs div

		var loadGIFs = document.getElementById('gifs-load-more');

		// no GIFs div

		var noGIFs = document.getElementById('no-gifs-found');

		// container div

		var container = document.getElementById('GIFs');

		// UI buttons

		var backBtn = document.getElementById('gifs-back-btn');

		var cancelBtn = document.getElementById('gifs-cancel-btn');

		// Remove inner HTML from container var

		container.innerHTML = '<div class="card" onclick="getGif(\'agree\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Agree</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/wGhYz3FHaRJgk/200w_d.gif"> </div> <div class="card" onclick="getGif(\'laugh\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Laugh</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/O5NyCibf93upy/200w_d.gif"> </div> <div class="card" onclick="getGif(\'confused\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Confused</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/200w_d.gif"> </div> <div class="card" onclick="getGif(\'sad\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Sad</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/ISOckXUybVfQ4/200w_d.gif"> </div> <div class="card" onclick="getGif(\'happy\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Happy</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/XR9Dp54ZC4dji/200w_d.gif"> </div> <div class="card" onclick="getGif(\'awesome\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Awesome</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/200w_d.gif"> </div> <div class="card" onclick="getGif(\'yes\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Yes</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/J336VCs1JC42zGRhjH/200w_d.gif"> </div> <div class="card" onclick="getGif(\'no\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">No</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/1zSz5MVw4zKg0/200w_d.gif"> </div> <div class="card" onclick="getGif(\'love\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Love</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/4N1wOi78ZGzSB6H7vK/200w_d.gif"> </div> <div class="card" onclick="getGif(\'please\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Please</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/qUIm5wu6LAAog/200w_d.gif"> </div> <div class="card" onclick="getGif(\'scared\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Scared</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/bEVKYB487Lqxy/200w_d.gif"> </div> <div class="card" onclick="getGif(\'angry\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Angry</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/12Pb87uq0Vwq2c/200w_d.gif"> </div> <div class="card" onclick="getGif(\'awkward\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Awkward</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/unFLKoAV3TkXe/200w_d.gif"> </div> <div class="card" onclick="getGif(\'cringe\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Cringe</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/1jDvQyhGd3L2g/200w_d.gif"> </div> <div class="card" onclick="getGif(\'omg\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">OMG</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/3o72F8t9TDi2xVnxOE/200w_d.gif"> </div> <div class="card" onclick="getGif(\'why\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Why</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/1M9fmo1WAFVK0/200w_d.gif"> </div> <div class="card" onclick="getGif(\'gross\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Gross</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/pVAMI8QYM42n6/200w_d.gif"> </div> <div class="card" onclick="getGif(\'meh\');" style="overflow: hidden;"> <div class="gif-cat-overlay"> <div style="position: relative;top: 50%;transform: translateY(-50%);color: #cfcfcf;font-weight: bold;">Meh</div> </div> <img class="img-fluid" src="https://media.giphy.com/media/xT77XTpyEzJ4OJO06c/200w_d.gif"> </div>'

		// Hide UI buttons

		backBtn.innerHTML = null;

		cancelBtn.innerHTML = null;

		// Remove inner HTML from no gifs div

		noGIFs.innerHTML = null;

		// Hide no more gifs div

		loadGIFs.innerHTML = null;

	});

// comment collapse

// Toggle comment collapse

function collapse_comment(comment_id) {

	var comment = "comment-" + comment_id;

	document.getElementById(comment).classList.toggle("collapsed");

};

//Commenting form

// Expand comment box on focus, hide otherwise

$('.comment-box').focus(function (event) {
	event.preventDefault();

	$(this).parent().parent().addClass("collapsed");

});


/*
$('.comment-box').blur(function () {
		event.preventDefault();

		$(this).parent().parent().removeClass("collapsed");
});

*/

// Comment edit form

toggleEdit=function(id){
	comment=document.getElementById("comment-text-"+id);
	form=document.getElementById("comment-edit-"+id);
	box=document.getElementById('edit-box-comment-'+id);
	actions = document.getElementById('comment-' + id +'-actions');

	comment.classList.toggle("d-none");
	form.classList.toggle("d-none");
	actions.classList.toggle("d-none");
	autoExpand(box);
};

// Post edit form

togglePostEdit=function(id){

	body=document.getElementById("post-body");
	title=document.getElementById("post-title");
	form=document.getElementById("edit-post-body-"+id);
	box=document.getElementById("post-edit-box-"+id);
	box2=document.getElementById("post-edit-box2-"+id);

	body.classList.toggle("d-none");
	title.classList.toggle("d-none");
	form.classList.toggle("d-none");
	autoExpand(box);
	autoExpand(box2);
};

//comment modding
function removeComment(post_id) {
	url="/api/ban_comment/"+post_id

	callback=function(){
		document.getElementById("comment-"+post_id+"-only").classList.add("banned");

		button=document.getElementById("moderate-"+post_id);
		button.onclick=function(){approveComment(post_id)};
		button.innerHTML='<i class="fas fa-clipboard-check"></i>Approve'
	}
	post(url, callback, "Comment has been removed.")
};

function approveComment(post_id) {
	url="/api/unban_comment/"+post_id

	callback=function(){
		document.getElementById("comment-"+post_id+"-only").classList.remove("banned");

		button=document.getElementById("moderate-"+post_id);
		button.onclick=function(){removeComment(post_id)};
		button.innerHTML='<i class="fas fa-trash-alt"></i>Remove'
	}

	post(url, callback, "Comment has been approved.")
}

admin_comment=function(cid){


	var xhr = new XMLHttpRequest();
	xhr.open("post", "/api/distinguish_comment/"+cid);

	var form = new FormData();

	form.append('formkey', formkey());

	xhr.withCredentials=true;
	xhr.onload=function(){
		if (xhr.status==200) {
			comment=document.getElementById('comment-'+cid+'-only');
			comment.innerHTML=JSON.parse(xhr.response)["html"];
		}
		else {
			var commentError = document.getElementById("comment-error-text");
			$('#toast-comment-success').toast('dispose');
			$('#toast-comment-error').toast('dispose');
			$('#toast-comment-error').toast('show');
			commentError.textContent = JSON.parse(xhr.response)["error"];
		}
	}
	xhr.send(form)
}



//comment replies

// https://stackoverflow.com/a/42183824/11724748

/*
function toggleDropdown(e) {
		const _d = $(e.target).closest('.dropdown'),
				_m = $('.dropdown-menu', _d);
		setTimeout(function () {
				const shouldOpen = e.type !== 'click' && _d.is(':hover');
				_m.toggleClass('show', shouldOpen);
				_d.toggleClass('show', shouldOpen);
				$('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
		}, e.type === 'mouseleave' ? 150 : 0);
}

// Display profile card on hover

$('body')
		.on('mouseenter mouseleave', '.user-profile', toggleDropdown)
		.on('click', '.dropdown-menu a', toggleDropdown);

// Toggle comment collapse

$(".toggle-collapse").click(function (event) {
		event.preventDefault();

		var id = $(this).parent().attr("id");

		document.getElementById(id).classList.toggle("collapsed");
});
*/


//Autoexpand textedit comments

function autoExpand (field) {

	//get current scroll position
	xpos=window.scrollX;
	ypos=window.scrollY;

	// Reset field height
	field.style.height = 'inherit';

	// Get the computed styles for the element
	var computed = window.getComputedStyle(field);

	// Calculate the height
	var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
	+ parseInt(computed.getPropertyValue('padding-top'), 10)
	+ field.scrollHeight
	+ parseInt(computed.getPropertyValue('padding-bottom'), 10)
	+ parseInt(computed.getPropertyValue('border-bottom-width'), 10)
	+ 32;

	field.style.height = height + 'px';

	//keep window position from changing
	window.scrollTo(xpos,ypos);

};

document.addEventListener('input', function (event) {
	if (event.target.tagName.toLowerCase() !== 'textarea') return;
	autoExpand(event.target);
}, false);

//dark mode

function switch_css() {
	css = document.getElementById("css-link");
	dswitch = document.getElementById("dark-switch");
	dswitchmobile = document.getElementById("dark-switch-mobile");

	if (css.href.includes("/assets/style/main.css")) {
		post("/settings/dark_mode/1",
			callback=function(){
				css.href="/assets/style/main_dark.css?v=2.35.94";
				dswitch.classList.remove("fa-toggle-off");
				dswitch.classList.add("fa-toggle-on");
				dswitchmobile.classList.remove("fa-toggle-off");
				dswitchmobile.classList.add("fa-toggle-on");
			}
			);
	}
	else {
		post("/settings/dark_mode/0",
			callback=function(){
				css.href="/assets/style/main.css?v=2.35.94";
				dswitch.classList.remove("fa-toggle-on");
				dswitch.classList.add("fa-toggle-off");
				dswitchmobile.classList.remove("fa-toggle-on");
				dswitchmobile.classList.add("fa-toggle-off");
			}
			);
	}
}

// Delete Post

function delete_postModal(id) {

	// Passed data for modal

	document.getElementById("deletePostButton-mobile").addEventListener("click", delete_post);

	document.getElementById("deletePostButton").addEventListener("click", delete_post);

	function delete_post(){	

		this.innerHTML='<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Deleting post';	
		this.disabled = true; 
		post('/delete_post/' + id,
			callback = function() {

				location.reload();
			}
			)
	}

};

// Delete Comment

function delete_commentModal(id) {

	// Passed data for modal

	document.getElementById("deleteCommentButton").onclick = function() {	

		this.innerHTML='<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Deleting comment';	
		this.disabled = true; 
		post('/delete/comment/' + id,
			callback = function() {

				location.reload();
			}
			)
	}

};

//Email verification text

function emailVerifyText() {

	document.getElementById("email-verify-text").innerHTML = "Verification email sent! Please check your inbox.";

}

//flagging
// Flag Comment

report_commentModal = function(id, author) {

	document.getElementById("comment-author").textContent = author;

	//offtopic.disabled=true;

	document.getElementById("reportCommentButton").onclick = function() {

		this.innerHTML='<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Reporting comment';
		this.disabled = true;
		post('/api/flag/comment/' + id,
			callback = function() {

				document.getElementById("reportCommentFormBefore").classList.add('d-none');
				document.getElementById("reportCommentFormAfter").classList.remove('d-none');
			}
			)
	}

};

$('#reportCommentModal').on('hidden.bs.modal', function () {

	var button = document.getElementById("reportCommentButton");

	var beforeModal = document.getElementById("reportCommentFormBefore");
	var afterModal = document.getElementById("reportCommentFormAfter");

	button.innerHTML='Report comment';
	button.disabled= false;
	afterModal.classList.add('d-none');

	if ( beforeModal.classList.contains('d-none') ) {
		beforeModal.classList.remove('d-none');
	}

});


// Flag Submission

report_postModal = function(id, author, board) {

	document.getElementById("post-author").textContent = author;

	offtopic=document.getElementById('report-post-to-guild-dropdown-option');
	offtopic.innerHTML= 'This post is off-topic for +' + board;

	if (board=='general') {
		offtopic.disabled=true;
	}
	else {
		offtopic.disabled=false;
	}

	selectbox=document.getElementById('report-type-dropdown');
	selectbox.value='reason_not_selected';

	submitbutton=document.getElementById("reportPostButton");
	submitbutton.disabled=true;

	submitbutton.onclick = function() {

		this.innerHTML='<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Reporting post';
		this.disabled = true;

		var xhr = new XMLHttpRequest();
		xhr.open("POST", '/api/flag/post/'+id, true);
		var form = new FormData()
		form.append("formkey", formkey());

		dropdown=document.getElementById("report-type-dropdown");
		form.append("report_type", dropdown.options[dropdown.selectedIndex].value);

		xhr.withCredentials=true;

		xhr.onload=function() {
			document.getElementById("reportPostFormBefore").classList.add('d-none');
			document.getElementById("reportPostFormAfter").classList.remove('d-none');
		};

		xhr.onerror=function(){alert(errortext)};
		xhr.send(form);

	}
};

$('#reportPostModal').on('hidden.bs.modal', function () {

	var button = document.getElementById("reportPostButton");

	var beforeModal = document.getElementById("reportPostFormBefore");
	var afterModal = document.getElementById("reportPostFormAfter");

	button.innerHTML='Report post';
	button.disabled= false;

	afterModal.classList.add('d-none');

	if ( beforeModal.classList.contains('d-none') ) {
		beforeModal.classList.remove('d-none');
	}

});

//enlarge thumbs
// Enlarge submissionlisting thumbnail

enlarge_thumb = function(post_id) {

	document.getElementById(post_id).classList.toggle("enlarged");

};

//iOS webapp stuff

(function(document,navigator,standalone) {
						// prevents links from apps from oppening in mobile safari
						// this javascript must be the first script in your <head>
						if ((standalone in navigator) && navigator[standalone]) {
							var curnode, location=document.location, stop=/^(a|html)$/i;
							document.addEventListener('click', function(e) {
								curnode=e.target;
								while (!(stop).test(curnode.nodeName)) {
									curnode=curnode.parentNode;
								}
										// Condidions to do this only on links to your own app
										// if you want all links, use if('href' in curnode) instead.
										if('href' in curnode && ( curnode.href.indexOf('http') || ~curnode.href.indexOf(location.host) ) ) {
											e.preventDefault();
											location.href = curnode.href;
										}
									},false);
						}
					})(document,window.navigator,'standalone');


//KC easter egg

$(function(){
	var kKeys = [];
	function Kpress(e){
		kKeys.push(e.keyCode);
		if (kKeys.toString().indexOf("38,38,40,40,37,39,37,39,66,65") >= 0) {
			$(this).unbind('keydown', Kpress);
			kExec();
		}
	}
	$(document).keydown(Kpress);
});
function kExec(){
 $('body').append ('<iframe width="0" height="0" src="https://www.youtube.com/embed/xoEEOrTctpA?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
 $('a').addClass('ruckus');
 $('p').addClass('ruckus');
 $('img').addClass('ruckus');
 $('span').addClass('ruckus');
 $('button').addClass('ruckus');
 $('i').addClass('ruckus');
 $('input').addClass('ruckus');
};

//Post kick

kick_postModal = function(id) {

	document.getElementById("kickPostButton").onclick = function() {

		this.innerHTML='<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>kicking post';
		this.disabled = true;
		post('/api/flag/post/' + id,
			callback = function() {

				location.reload();
			}
			)
	}
};

$('#kickPostModal').on('hidden.bs.modal', function () {

	var button = document.getElementById("kickPostButton");

	var beforeModal = document.getElementById("kickPostFormBefore");
	var afterModal = document.getElementById("kickPostFormAfter");

	button.innerHTML='kick post';
	button.disabled= false;

	afterModal.classList.add('d-none');

	if ( beforeModal.classList.contains('d-none') ) {
		beforeModal.classList.remove('d-none');
	}

});

//POST

function post(url, callback, errortext) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	var form = new FormData()
	form.append("formkey", formkey());
	xhr.withCredentials=true;
	xhr.onerror=function() { alert(errortext); };
	xhr.onload = function() {
		if (xhr.status >= 200 && xhr.status < 300) {
			callback();
		} else {
			xhr.onerror();
		}
	};
	xhr.send(form);
};

// sub/unsub

function toggleSub(){
	document.getElementById('button-unsub').classList.toggle('d-none');
	document.getElementById('button-sub').classList.toggle('d-none');
	document.getElementById('button-unsub-modal').classList.toggle('d-none');
	document.getElementById('button-sub-modal').classList.toggle('d-none');
	document.getElementById('button-unsub-mobile').classList.toggle('d-none');
	document.getElementById('button-sub-mobile').classList.toggle('d-none');
}

function post_toast(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	var form = new FormData()
	form.append("formkey", formkey());
	xhr.withCredentials=true;

	xhr.onload = function() {
		if (xhr.status==204) {}
			else if (xhr.status >= 200 && xhr.status < 300) {
				$('#toast-post-success').toast('dispose');
				$('#toast-post-success').toast('show');
				document.getElementById('toast-post-success-text').innerText = JSON.parse(xhr.response)["message"];
				callback(xhr)
				return true

			} else if (xhr.status >= 300 && xhr.status < 400) {
				window.location.href = JSON.parse(xhr.response)["redirect"]
			} else {
				data=JSON.parse(xhr.response);
				
				$('#toast-post-error').toast('dispose');
				$('#toast-post-error').toast('show');
				document.getElementById('toast-post-error-text').innerText = data["error"];
				return false
				
			}
		};

		xhr.send(form);

	}


//Admin post modding
function removePost(post_id) {
	url="/api/ban_post/"+post_id

	callback=function(){
		document.getElementById("post-"+post_id).classList.add("banned");

		var button=document.getElementById("moderate-post-"+post_id);
		button.onclick=function(){approvePost(post_id)};
		button.classList.remove("removeDropdownItem");
		button.classList.add("approveDropdownItem");
		button.innerHTML='<i class="fas fa-clipboard-check"></i>Approve'
	}
	post(url, callback, "Post has been removed.")
}

function approvePost(post_id) {
	url="/api/unban_post/"+post_id

	callback=function(){
		document.getElementById("post-"+post_id).classList.remove("banned");

		var button=document.getElementById("moderate-post-"+post_id);
		button.onclick=function(){removePost(post_id)};
		button.classList.remove("approveDropdownItem");
		button.classList.add("removeDropdownItem");
		button.innerHTML='<i class="fas fa-trash-alt"></i>Remove'
	}

	post(url, callback, "Post has been approved.")
}

//Element deleter

function deleteElement(eid) {
	x=document.getElementById(eid)
	x.parentElement.removeChild(x)

}


//Signup js
// Display username and password requirements on input

$('#password-register').on('input', function () {

	var charCount = document.getElementById("password-register").value;
	var id = document.getElementById("passwordHelpRegister");
	var successID = document.getElementById("passwordHelpSuccess");

	if (charCount.length >= 8) {
		id.classList.add("d-none");
		successID.classList.remove("d-none");
	}
	else {
		id.classList.remove("d-none");
		successID.classList.add("d-none");
	};

});

// Check username length, special chars

$('#username-register').on('input', function () {

	var charCount = document.getElementById("username-register").value;
	var id = document.getElementById("usernameHelpRegister");
	var successID = document.getElementById("usernameHelpSuccess");

	var ruqqusAPI = '/api/is_available/' + charCount;

	if (charCount.length >= 3) {

		$.getJSON(ruqqusAPI, function(result) {
			$.each(result, function(i, field) {
				if (field == false) {
					id.innerHTML = '<span class="form-text font-weight-bold text-danger mt-1">Username already taken :(';
				}
			});
		});

	}

	if (!/[^a-zA-Z0-9_$]/.test(charCount)) {
		// Change alert text
		id.innerHTML = '<span class="form-text font-weight-bold text-success mt-1">Username is a-okay!';

		if (charCount.length < 3) {
			id.innerHTML = '<span class="form-text font-weight-bold text-muted mt-1">Username must be at least 3 characters long.';
		}
		else if (charCount.length > 25) {
			id.innerHTML = '<span class="form-text font-weight-bold text-danger mt-1">Username must be 25 characters or less.';
		}
	}
	else {
		id.innerHTML = '<span class="form-text font-weight-bold text-danger mt-1">No special characters or spaces allowed.</span>';
	};

});

// Search Icon
// Change navbar search icon when form is in focus, active states

$(".form-control").focus(function () {
	$(this).prev('.input-group-append').removeClass().addClass('input-group-append-focus');
	$(this).next('.input-group-append').removeClass().addClass('input-group-append-focus');
});

$(".form-control").focusout(function () {
	$(this).prev('.input-group-append-focus').removeClass().addClass('input-group-append');
	$(this).next('.input-group-append-focus').removeClass().addClass('input-group-append');
});

//spinner effect

$(document).ready(function() {
	$('#login').submit(function() {
			// disable button
			$("#login_button").prop("disabled", true);
			// add spinner to button
			$("#login_button").html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Signing in');
		});
});

$(document).ready(function() {
	$('#signup').submit(function() {
			// disable button
			$("#register_button").prop("disabled", true);
			// add spinner to button
			$("#register_button").html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Registering');
		});
});

$(document).ready(function() {
	$('#submitform').submit(function() {
			// disable button
			$("#create_button").prop("disabled", true);
			// add spinner to button
			$("#create_button").html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Creating post');
		});
});

// Sidebar collapsing

// Desktop

if (document.getElementById("sidebar-left") && localStorage.sidebar_pref == 'collapsed') {

	document.getElementById('sidebar-left').classList.add('sidebar-collapsed');

};

function toggle_sidebar_collapse() {

	// Store Pref
	localStorage.setItem('sidebar_pref', 'collapsed');

	document.getElementById('sidebar-left').classList.toggle('sidebar-collapsed');

};

function toggle_sidebar_expand() {

	// Remove Pref
	localStorage.removeItem('sidebar_pref');

	document.getElementById('sidebar-left').classList.toggle('sidebar-collapsed');

}

// Voting

var upvote = function(event) {

	var type = event.target.dataset.contentType;
	var id = event.target.dataset.idUp;

	var downvoteButton = document.getElementsByClassName(type + '-' + id + '-down');
	var upvoteButton = document.getElementsByClassName(type + '-' + id + '-up');
	var scoreText = document.getElementsByClassName(type + '-score-' + id);

	for (var j = 0; j < upvoteButton.length && j < downvoteButton.length && j < scoreText.length; j++) {

		var thisUpvoteButton = upvoteButton[j];
		var thisDownvoteButton = downvoteButton[j];
		var thisScoreText = scoreText[j];
		var thisScore = Number(thisScoreText.textContent);

		if (thisUpvoteButton.classList.contains('active')) {
			thisUpvoteButton.classList.remove('active')
			thisScoreText.textContent = thisScore - 1
			voteDirection = "0"
		} else if (thisDownvoteButton.classList.contains('active')) {
			thisUpvoteButton.classList.add('active')
			thisDownvoteButton.classList.remove('active')
			thisScoreText.textContent = thisScore + 2
			voteDirection = "1"
		} else {
			thisUpvoteButton.classList.add('active')
			thisScoreText.textContent = thisScore + 1
			voteDirection = "1"
		}

		if (thisUpvoteButton.classList.contains('active')) {
			thisScoreText.classList.add('score-up')
			thisScoreText.classList.remove('score-down')
			thisScoreText.classList.remove('score')
		} else if (thisDownvoteButton.classList.contains('active')) {
			thisScoreText.classList.add('score-down')
			thisScoreText.classList.remove('score-up')
			thisScoreText.classList.remove('score')
		} else {
			thisScoreText.classList.add('score')
			thisScoreText.classList.remove('score-up')
			thisScoreText.classList.remove('score-down')
		}
	}

	post_toast("/api/vote/" + type + "/" + id + "/" + voteDirection);
	
}

var downvote = function(event) {

	var type = event.target.dataset.contentType;
	var id = event.target.dataset.idDown;

	var downvoteButton = document.getElementsByClassName(type + '-' + id + '-down');
	var upvoteButton = document.getElementsByClassName(type + '-' + id + '-up');
	var scoreText = document.getElementsByClassName(type + '-score-' + id);

	for (var j = 0; j < upvoteButton.length && j < downvoteButton.length && j < scoreText.length; j++) {

		var thisUpvoteButton = upvoteButton[j];
		var thisDownvoteButton = downvoteButton[j];
		var thisScoreText = scoreText[j];
		var thisScore = Number(thisScoreText.textContent);

		if (thisDownvoteButton.classList.contains('active')) {
			thisDownvoteButton.classList.remove('active')
			thisScoreText.textContent = thisScore + 1
			voteDirection = "0"
		} else if (thisUpvoteButton.classList.contains('active')) {
			thisDownvoteButton.classList.add('active')
			thisUpvoteButton.classList.remove('active')
			thisScoreText.textContent = thisScore - 2
			voteDirection = "-1"
		} else {
			thisDownvoteButton.classList.add('active')
			thisScoreText.textContent = thisScore - 1
			voteDirection = "-1"
		}

		if (thisUpvoteButton.classList.contains('active')) {
			thisScoreText.classList.add('score-up')
			thisScoreText.classList.remove('score-down')
			thisScoreText.classList.remove('score')
		} else if (thisDownvoteButton.classList.contains('active')) {
			thisScoreText.classList.add('score-down')
			thisScoreText.classList.remove('score-up')
			thisScoreText.classList.remove('score')
		} else {
			thisScoreText.classList.add('score')
			thisScoreText.classList.remove('score-up')
			thisScoreText.classList.remove('score-down')
		}
	}

	post_toast("/api/vote/" + type + "/" + id + "/" + voteDirection);
	
}


var register_votes = function() {
	var upvoteButtons = document.getElementsByClassName('upvote-button')

	var downvoteButtons = document.getElementsByClassName('downvote-button')

	var voteDirection = 0

	for (var i = 0; i < upvoteButtons.length; i++) {
		upvoteButtons[i].addEventListener('click', upvote, false);
		upvoteButtons[i].addEventListener('keydown', function(event) {
			if (event.keyCode === 13) {
				upvote(event)
			}
		}, false)
	};

	for (var i = 0; i < downvoteButtons.length; i++) {
		downvoteButtons[i].addEventListener('click', downvote, false);
		downvoteButtons[i].addEventListener('keydown', function(event) {
			if (event.keyCode === 13) {
				downvote(event)
			}
		}, false)
	};
}

register_votes()

/*

function vote(post_id, direction) {
	url="/api/vote/post/"+post_id+"/"+direction;

	callback=function(){
		thing = document.getElementById("post-"+post_id);
		uparrow1=document.getElementById("post-"+post_id+"-up");
		downarrow1=document.getElementById("post-"+post_id+"-down");
		scoreup1=document.getElementById("post-"+post_id+"-score-up");
		scorenone1=document.getElementById("post-"+post_id+"-score-none");
		scoredown1=document.getElementById("post-"+post_id+"-score-down");

		thing2=document.getElementById("voting-"+post_id+"-mobile")
		uparrow2=document.getElementById("arrow-"+post_id+"-mobile-up");
		downarrow2=document.getElementById("arrow-"+post_id+"-mobile-down");
		scoreup2=document.getElementById("post-"+post_id+"-score-mobile-up");
		scorenone2=document.getElementById("post-"+post_id+"-score-mobile-none");
		scoredown2=document.getElementById("post-"+post_id+"-score-mobile-down");

		if (direction=="1") {
			thing.classList.add("upvoted");
			thing.classList.remove("downvoted");
			uparrow1.onclick=function(){vote(post_id, 0)};
			downarrow1.onclick=function(){vote(post_id, -1)};
			scoreup1.classList.remove("d-none");
			scorenone1.classList.add("d-none");
			scoredown1.classList.add("d-none");

			thing2.classList.add("upvoted");
			thing2.classList.remove("downvoted");
			uparrow2.onclick=function(){vote(post_id, 0)};
			downarrow2.onclick=function(){vote(post_id, -1)};
			scoreup2.classList.remove("d-none");
			scorenone2.classList.add("d-none");
			scoredown2.classList.add("d-none");
		}
		else if (direction=="-1"){
			thing.classList.remove("upvoted");
			thing.classList.add("downvoted");
			uparrow1.onclick=function(){vote(post_id, 1)};
			downarrow1.onclick=function(){vote(post_id, 0)};
			scoreup1.classList.add("d-none");
			scorenone1.classList.add("d-none");
			scoredown1.classList.remove("d-none");

			thing2.classList.remove("upvoted");
			thing2.classList.add("downvoted");
			uparrow2.onclick=function(){vote(post_id, 1)};
			downarrow2.onclick=function(){vote(post_id, 0)};
			scoreup2.classList.add("d-none");
			scorenone2.classList.add("d-none");
			scoredown2.classList.remove("d-none");

		}
		else if (direction=="0"){
			thing.classList.remove("upvoted");
			thing.classList.remove("downvoted");
			uparrow1.onclick=function(){vote(post_id, 1)};
			downarrow1.onclick=function(){vote(post_id, -1)};
			scoreup1.classList.add("d-none");
			scorenone1.classList.remove("d-none");
			scoredown1.classList.add("d-none");

			thing2.classList.remove("upvoted");
			thing2.classList.remove("downvoted");
			uparrow2.onclick=function(){vote(post_id, 1)};
			downarrow2.onclick=function(){vote(post_id, -1)};
			scoreup2.classList.add("d-none");
			scorenone2.classList.remove("d-none");
			scoredown2.classList.add("d-none");

		}
	}

	post(url, callback, "Unable to vote at this time. Please try again later.");
};

*/

function vote_comment(comment_id, direction) {
	url="/api/vote/comment/"+ comment_id +"/"+direction;

	callback=function(){
		thing = document.getElementById("comment-"+ comment_id+"-actions");
		uparrow1=document.getElementById("comment-"+ comment_id +"-up");
		downarrow1=document.getElementById("comment-"+ comment_id +"-down");
		scoreup1=document.getElementById("comment-"+ comment_id +"-score-up");
		scorenone1=document.getElementById("comment-"+ comment_id +"-score-none");
		scoredown1=document.getElementById("comment-"+ comment_id +"-score-down");

		if (direction=="1") {
			thing.classList.add("upvoted");
			thing.classList.remove("downvoted");
			uparrow1.onclick=function(){vote_comment(comment_id, 0)};
			downarrow1.onclick=function(){vote_comment(comment_id, -1)};
			scoreup1.classList.remove("d-none");
			scorenone1.classList.add("d-none");
			scoredown1.classList.add("d-none");
		}
		else if (direction=="-1"){
			thing.classList.remove("upvoted");
			thing.classList.add("downvoted");
			uparrow1.onclick=function(){vote_comment(comment_id, 1)};
			downarrow1.onclick=function(){vote_comment(comment_id, 0)};
			scoreup1.classList.add("d-none");
			scorenone1.classList.add("d-none");
			scoredown1.classList.remove("d-none");
		}
		else if (direction=="0"){
			thing.classList.remove("upvoted");
			thing.classList.remove("downvoted");
			uparrow1.onclick=function(){vote_comment(comment_id, 1)};
			downarrow1.onclick=function(){vote_comment(comment_id, -1)};
			scoreup1.classList.add("d-none");
			scorenone1.classList.remove("d-none");
			scoredown1.classList.add("d-none");
		}
	}

	post(url, callback, "Unable to vote at this time. Please try again later.");
}

// Yank Post

function yank_postModal(id, author, comments, title, author_link, domain, timestamp) {

	// Passed data for modal

	document.getElementById("post-author-url").innerText = author;

	document.getElementById("post-comments").textContent = comments;

	document.getElementById("post-title").textContent = title;

	document.getElementById("post-author-url").href = author_link;

	document.getElementById("post-domain").textContent = domain;

	document.getElementById("post-timestamp").textContent = timestamp;


	document.getElementById("yank-post-form").action="/mod/take/"+id;
	

	document.getElementById("yankPostButton").onclick = function() {	


		var yankError = document.getElementById("toast-error-message");



		var xhr = new XMLHttpRequest();
		xhr.open("post", "/mod/take/"+id);
		xhr.withCredentials=true;
		f=new FormData();
		f.append("formkey", formkey());
		f.append("board_id", document.getElementById('yank-type-dropdown').value)
		xhr.onload=function(){
			if (xhr.status==204) {
				window.location.reload(true);
			}
			else {
				$('#toast-invite-error').toast('dispose');
				$('#toast-invite-error').toast('show');
				yankError.textContent = JSON.parse(xhr.response)["error"];
			}
		}
		xhr.send(f);
	}
};

//yt embed

function getId(url) {
	var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	var match = url.match(regExp);

	if (match && match[2].length == 11) {
		return match[2];
	} else {
		return 'error';
	}
}

var myUrl = $('#embedURL').text();

myId = getId(myUrl);

$('#ytEmbed').html('<iframe width="100%" height="475" src="//www.youtube.com/embed/' + myId + '" frameborder="0" allowfullscreen></iframe>');


// Expand Images on Desktop

function expandDesktopImage(image, link) {

// GIPHY attribution div

var attribution = document.getElementById("modal-image-attribution");

// Link text

var linkText = document.getElementById("desktop-expanded-image-link");
var imgLink = document.getElementById("desktop-expanded-image-wrap-link");

var inlineImage = document.getElementById("desktop-expanded-image");

inlineImage.src = image;

linkText.href = image;
imgLink.href=image;

if (image.includes("i.ruqqus.ga")) {
	linkText.textContent = 'Go to website';
}
else {
	linkText.textContent = 'View original';
}
};

// When image modal is closed

$('#expandImageModal').on('hidden.bs.modal', function (e) {

		// GIPHY attribution div

		var attribution = document.getElementById("modal-image-attribution");

		// remove the attribution

		attribution.innerHTML = null;

	// remove image src and link

	document.getElementById("desktop-expanded-image").src = '';

	document.getElementById("desktop-expanded-image-link").href = '';

});

// Text Formatting

// Bold Text

makeBold = function (form) {
	var text = document.getElementById(form);
	var startIndex = text.selectionStart,
	endIndex = text.selectionEnd;
	var selectedText = text.value.substring(startIndex, endIndex);

	var format = '**'

	if (selectedText.includes('**')) {
		text.value = selectedText.replace(/\*/g, '');
		
	}
	else if (selectedText.length == 0) {
		text.value = text.value.substring(0, startIndex) + selectedText + text.value.substring(endIndex);
	}
	else {
		text.value = text.value.substring(0, startIndex) + format + selectedText + format + text.value.substring(endIndex);
	}
}

// Italicize Comment Text

makeItalics = function (form) {
	var text = document.getElementById(form);
	var startIndex = text.selectionStart,
	endIndex = text.selectionEnd;
	var selectedText = text.value.substring(startIndex, endIndex);

	var format = '*'

	if (selectedText.includes('*')) {
		text.value = selectedText.replace(/\*/g, '');
		
	}
	else if (selectedText.length == 0) {
		text.value = text.value.substring(0, startIndex) + selectedText + text.value.substring(endIndex);
	}
	else {
		text.value = text.value.substring(0, startIndex) + format + selectedText + format + text.value.substring(endIndex);
	}
}

// Quote Comment Text

makeQuote = function (form) {
	var text = document.getElementById(form);
	var startIndex = text.selectionStart,
	endIndex = text.selectionEnd;
	var selectedText = text.value.substring(startIndex, endIndex);

	var format = '>'

	if (selectedText.includes('>')) {
		text.value = text.value.substring(0, startIndex) + selectedText.replace(/\>/g, '') + text.value.substring(endIndex);
		
	}
	else if (selectedText.length == 0) {
		text.value = text.value.substring(0, startIndex) + selectedText + text.value.substring(endIndex);
	}
	else {
		text.value = text.value.substring(0, startIndex) + format + selectedText + text.value.substring(endIndex);
	}
}

// Character Count

function charLimit(form, text) {

	var input = document.getElementById(form);

	var text = document.getElementById(text);

	var length = input.value.length;

	var maxLength = input.getAttribute("maxlength");

	if (length >= maxLength) {
		text.style.color = "#E53E3E";
	}
	else if (length >= maxLength * .72){
		text.style.color = "#FFC107";
	}
	else {
		text.style.color = "#A0AEC0";
	}

	text.innerText = maxLength - length;

}

// Mobile bottom navigation bar

window.onload = function () {
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function () {
		var currentScrollPos = window.pageYOffset;

		var topBar = document.getElementById("fixed-bar-mobile");

		var bottomBar = document.getElementById("mobile-bottom-navigation-bar");

		var dropdown = document.getElementById("mobileSortDropdown");

		var navbar = document.getElementById("navbar");

		if (bottomBar != null) {
			if (prevScrollpos > currentScrollPos && (window.innerHeight + currentScrollPos) < (document.body.offsetHeight - 65)) {
				bottomBar.style.bottom = "0px";
			} 
			else if (currentScrollPos <= 125 && (window.innerHeight + currentScrollPos) < (document.body.offsetHeight - 65)) {
				bottomBar.style.bottom = "0px";
			}
			else if (prevScrollpos > currentScrollPos && (window.innerHeight + currentScrollPos) >= (document.body.offsetHeight - 65)) {
				bottomBar.style.bottom = "-50px";
			}
			else {
				bottomBar.style.bottom = "-50px";
			}
		}

	// Execute if bottomBar exists

	if (topBar != null && dropdown != null) {
		if (prevScrollpos > currentScrollPos) {
			topBar.style.top = "49px";
			navbar.classList.remove("shadow");
		} 
		else if (currentScrollPos <= 125) {
			topBar.style.top = "49px";
			navbar.classList.remove("shadow");
		}
		else {
			topBar.style.top = "-49px";
			dropdown.classList.remove('show');
			navbar.classList.add("shadow");
		}
	}
	prevScrollpos = currentScrollPos;
}
}

// Tooltips

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip(); 
});

// Paste to create submission

document.addEventListener('paste', function (event) {

	var nothingFocused = document.activeElement === document.body;

	if (nothingFocused) {

		if (document.getElementById('guild-name-reference')) {
			var guild = document.getElementById('guild-name-reference').innerText;
		}

		var clipText = event.clipboardData.getData('Text');

		var url = new RegExp('^(?:[a-z]+:)?//', 'i');

		if (url.test(clipText) && window.location.pathname !== '/submit' && guild == undefined) {
			window.location.href = '/submit?url=' + clipText;
		}
		else if (url.test(clipText) && window.location.pathname !== '/submit' && guild !== undefined) {
			window.location.href = '/submit?url=' + clipText + '&guild=' + guild;
		}
		else if (url.test(clipText) && window.location.pathname == '/submit' && guild == undefined) {

			document.getElementById("post-URL").value = clipText;

			autoSuggestTitle()

		}
	}
});

//	Submit Page Front-end Validation

function checkForRequired() {

// Divs

var title = document.getElementById("post-title");

var url = document.getElementById("post-URL");

var text = document.getElementById("post-text");

var button = document.getElementById("create_button");

var image = document.getElementById("file-upload");

// Toggle reuqired attribute

if (url.value.length > 0 || image.value.length > 0) {
	text.required = false;
	url.required=false;
} else if (text.value.length > 0 || image.value.length > 0) {
	url.required = false;
} else {
	text.required = true;
	url.required = true;
}

// Validity check

var isValidTitle = title.checkValidity();

var isValidURL = url.checkValidity();

var isValidText = text.checkValidity();

// Disable submit button if invalid inputs

if (isValidTitle && (isValidURL || image.value.length>0)) {
	button.disabled = false;
} else if (isValidTitle && isValidText) {
	button.disabled = false;
} else {
	button.disabled = true;
}

}

// Auto-suggest title given URL

function autoSuggestTitle()	{

	var urlField = document.getElementById("post-URL");

	var titleField = document.getElementById("post-title");

	var isValidURL = urlField.checkValidity();

	if (isValidURL && urlField.value.length > 0 && titleField.value === "") {

		var x = new XMLHttpRequest();
		x.withCredentials=true;
		x.onreadystatechange = function() {
			if (x.readyState == 4 && x.status == 200) {

				title=JSON.parse(x.responseText)["title"];
				titleField.value=title;

				checkForRequired()
			}
		}
		x.open('get','/submit/title?url=' + urlField.value);
		x.send(null);

	};

};

// Run AutoSuggestTitle function on load

if (window.location.pathname=='/submit') {
	window.onload = autoSuggestTitle();
}

// Exile Member

function exile_from_guild(boardid) {

	var exileForm = document.getElementById("exile-form");

	var exileError = document.getElementById("toast-error-message");

	var usernameField = document.getElementById("exile-username");

	var isValidUsername = usernameField.checkValidity();

	username = usernameField.value;

	if (isValidUsername) {

		var xhr = new XMLHttpRequest();
		xhr.open("post", "/mod/exile/"+boardid);
		xhr.withCredentials=true;
		f=new FormData();
		f.append("username", username);
		f.append("formkey", formkey());
		xhr.onload=function(){
			if (xhr.status==204) {
				window.location.reload(true);
			}
			else {
				$('#toast-exile-error').toast('dispose');
				$('#toast-exile-error').toast('show');
				exileError.textContent = JSON.parse(xhr.response)["error"];
			}
		}
		xhr.send(f)
	}

}

// Approve user
function approve_from_guild(boardid) {

	var approvalForm = document.getElementById("approve-form");

	var approveError = document.getElementById("toast-error-message");

	var usernameField = document.getElementById("approve-username");

	var isValidUsername = usernameField.checkValidity();

	username = usernameField.value;

	if (isValidUsername) {

		var xhr = new XMLHttpRequest();
		xhr.open("post", "/mod/approve/"+boardid);
		xhr.withCredentials=true;
		f=new FormData();
		f.append("username", username);
		f.append("formkey", formkey());
		xhr.onload=function(){
			if (xhr.status==204) {
				window.location.reload(true);
			}
			else {
				$('#toast-approve-error').toast('dispose');
				$('#toast-approve-error').toast('show');
				approveError.textContent = JSON.parse(xhr.response)["error"];
			}
		}
		xhr.send(f)
	}

}

// Invite user to mod
function invite_mod_to_guild(boardid) {

	var inviteForm = document.getElementById("invite-form");

	var inviteError = document.getElementById("toast-error-message");

	var usernameField = document.getElementById("invite-username");

	var isValidUsername = usernameField.checkValidity();

	username = usernameField.value;

	if (isValidUsername) {

		var xhr = new XMLHttpRequest();
		xhr.open("post", "/mod/invite_mod/"+boardid);
		xhr.withCredentials=true;
		f=new FormData();
		f.append("username", username);
		f.append("formkey", formkey());
		xhr.onload=function(){
			if (xhr.status==204) {
				window.location.reload(true);
			}
			else {
				$('#toast-invite-error').toast('dispose');
				$('#toast-invite-error').toast('show');
				inviteError.textContent = JSON.parse(xhr.response)["error"];
			}
		}
		xhr.send(f)
	}

}

block_user=function() {

	var exileForm = document.getElementById("exile-form");

	var exileError = document.getElementById("toast-error-message");

	var usernameField = document.getElementById("exile-username");

	var isValidUsername = usernameField.checkValidity();

	username = usernameField.value;

	if (isValidUsername) {

		var xhr = new XMLHttpRequest();
		xhr.open("post", "/settings/block");
		xhr.withCredentials=true;
		f=new FormData();
		f.append("username", username);
		f.append("formkey", formkey());
		xhr.onload=function(){
			if (xhr.status<300) {
				window.location.reload(true);
			}
			else {
				$('#toast-exile-error').toast('dispose');
				$('#toast-exile-error').toast('show');
				exileError.textContent = JSON.parse(xhr.response)["error"];
			}
		}
		xhr.send(f)
	}

}

post_comment=function(fullname){


	var form = new FormData();

	form.append('formkey', formkey());
	form.append('parent_fullname', fullname);
	form.append('submission', document.getElementById('reply-form-submission-'+fullname).value);
	form.append('body', document.getElementById('reply-form-body-'+fullname).value);
	form.append('file', document.getElementById('file-upload-reply-'+fullname).files[0]);
/* 	form.append('over_18', document.getElementById('nsfwCheck-'+fullname).checked);
	form.append('is_nsfl', document.getElementById('nsflCheck-'+fullname).checked);
 */
	var xhr = new XMLHttpRequest();
	xhr.open("post", "/api/comment");
	xhr.withCredentials=true;
	xhr.onload=function(){
		if (xhr.status==200) {
			commentForm=document.getElementById('comment-form-space-'+fullname);
			commentForm.innerHTML=JSON.parse(xhr.response)["html"];
			$('#toast-comment-success').toast('dispose');
			$('#toast-comment-error').toast('dispose');
			$('#toast-comment-success').toast('show');
		}
		else {
			var commentError = document.getElementById("comment-error-text");
			$('#toast-comment-success').toast('dispose');
			$('#toast-comment-error').toast('dispose');
			$('#toast-comment-error').toast('show');
			commentError.textContent = JSON.parse(xhr.response)["error"];
		}
	}
	xhr.send(form)

	document.getElementById('save-reply-to-'+fullname).classList.add('disabled');

}

herald_comment=function(bid,cid){


	var xhr = new XMLHttpRequest();
	xhr.open("post", "/mod/distinguish_comment/"+bid+'/'+cid);

	var form = new FormData();

	form.append('formkey', formkey());

	xhr.withCredentials=true;
	xhr.onload=function(){
		if (xhr.status==200) {
			comment=document.getElementById('comment-'+cid+'-only');
			comment.innerHTML=JSON.parse(xhr.response)["html"];
		}
		else {
			var commentError = document.getElementById("comment-error-text");
			$('#toast-comment-success').toast('dispose');
			$('#toast-comment-error').toast('dispose');
			$('#toast-comment-error').toast('show');
			commentError.textContent = JSON.parse(xhr.response)["error"];
		}
	}
	xhr.send(form)

}

pin_comment=function(bid,cid){


	var xhr = new XMLHttpRequest();
	xhr.open("post", "/mod/comment_pin/"+bid+'/'+cid);

	var form = new FormData();

	form.append('formkey', formkey());

	xhr.withCredentials=true;
	xhr.onload=function(){
		if (xhr.status==200) {
			comment=document.getElementById('comment-'+cid+'-only');
			comment.innerHTML=JSON.parse(xhr.response)["html"];
		}
		else {
			var commentError = document.getElementById("comment-error-text");
			$('#toast-comment-success').toast('dispose');
			$('#toast-comment-error').toast('dispose');
			$('#toast-comment-error').toast('show');
			commentError.textContent = JSON.parse(xhr.response)["error"];
		}
	}
	xhr.send(form)

}



//part of submit page js

hide_image=function(){
	x=document.getElementById('image-upload-block');
	url=document.getElementById('post-URL').value;
	if (url.length>=1){
		x.classList.add('d-none');
	}
	else {
		x.classList.remove('d-none');
	}
}


comment_edit=function(id){

	var commentError = document.getElementById("comment-error-text");

	var form = new FormData();

	form.append('formkey', formkey());
	form.append('body', document.getElementById('comment-edit-body-'+id).value);


	var xhr = new XMLHttpRequest();
	xhr.open("post", "/edit_comment/"+id);
	xhr.withCredentials=true;
	xhr.onload=function(){
		if (xhr.status==200) {
			commentForm=document.getElementById('comment-text-'+id);
			commentForm.innerHTML=JSON.parse(xhr.response)["html"];
			document.getElementById('cancel-edit-'+id).click()
			$('#toast-comment-success').toast('dispose');
			$('#toast-comment-error').toast('dispose');
			$('#toast-comment-success').toast('show');
		}
		else {
			$('#toast-comment-success').toast('dispose');
			$('#toast-comment-error').toast('dispose');
			$('#toast-comment-error').toast('show');
			commentError.textContent = JSON.parse(xhr.response)["error"];
		}
	}
	xhr.send(form)

}


filter_guild=function() {

	var exileForm = document.getElementById("exile-form");

	var exileError = document.getElementById("toast-error-message");

	var boardField = document.getElementById("exile-username");

	var isValidUsername = boardField.checkValidity();

	boardname = boardField.value;

	if (isValidUsername) {

		var xhr = new XMLHttpRequest();
		xhr.open("post", "/settings/block_guild");
		xhr.withCredentials=true;
		f=new FormData();
		f.append("board", boardname);
		f.append("formkey", formkey());
		xhr.onload=function(){
			if (xhr.status<300) {
				window.location.reload(true);
			}
			else {
				$('#toast-exile-error').toast('dispose');
				$('#toast-exile-error').toast('show');
				exileError.textContent = JSON.parse(xhr.response)["error"];
			}
		}
		xhr.send(f)
	}

}

coin_quote = function() {

	var coins = document.getElementById('select-coins');
	var btn = document.getElementById('buy-coin-btn')
	var promo=document.getElementById('promo-code')
	var promotext=document.getElementById('promo-text')

	coin_count = coins.selectedOptions[0].value

	var xhr = new XMLHttpRequest();
	xhr.open('get', '/shop/get_price?coins='+coin_count+'&promo='+promo.value)

	xhr.onload=function(){
		var s = 'Buy '+ coin_count + ' Coin';

		if (coin_count > 1){s = s+'s'};

		s=s+': $'+JSON.parse(xhr.response)["price"];

		btn.value=s;

		promotext.innerText=JSON.parse(xhr.response)["promo"];
	}
	xhr.send()
}


var tipModal2 = function(id, content, link, recipient, recipientPFP) {
	console.log('opened modal, tipModal2 function triggered')

	document.getElementById('tip-recipient-pfp').src = recipientPFP;

	document.getElementById("tip-content-type").innerText = content
	document.getElementById("tip-recipient-username").innerText = recipient

	document.getElementById("sendTipButton").onclick = function() {
		post_toast('/gift_'+ content +'/' + id + '?coins=1',
			callback = function() {
				location.href = link
			}
			)
	}

	console.log(recipientPFP, id, content, link, recipient)
}

var togglecat = function(sort, reload=false, delay=1000, page="/all") {
	var cbs = document.getElementsByClassName('cat-check');
	var l = []
	for (var i=0; i< cbs.length; i++) {
		l.push(cbs[i].checked)
	}
	setTimeout(function(){triggercat(sort, l, reload, page)}, delay)
	return l;
}

var triggercat=function(sort, cats, reload, page) {

	var cbs = document.getElementsByClassName('cat-check');
	var l = []
	for (var i=0; i< cbs.length; i++) {
		l.push(cbs[i].checked)
	}



	for (var i=0; i<l.length; i++){
		if (cats[i] != l[i]){
			console.log("triggerfail");
			return false;
		}
	}

	console.log("triggercat")

	var catlist=[]
	for (var i=0; i< cbs.length; i++) {
		if(cbs[i].checked){
			catlist.push(cbs[i].dataset.cat);
		}
	}

	var groups = document.getElementsByClassName('cat-group');
	var grouplist=[];
	for (i=0; i<groups.length; i++){
		if(groups[i].checked){
			grouplist.push(groups[i].dataset.group);
		}
	}

	var url='/inpage/all?sort='+ sort +'&cats=' + catlist.join(',') + '&groups=' + grouplist.join(',');
	

	xhr = new XMLHttpRequest();
	xhr.open('get', url);
	xhr.withCredentials=true;

	xhr.onload=function(){
		if (reload){
			document.location.href=page
		}
		else {
			var l = document.getElementById('posts');
			l.innerHTML=xhr.response;
			register_votes();
		}
	}
	xhr.send()
}


var permsEdit = function(username, permstring) {

	document.getElementById('permedit-user').innerText = username
	document.getElementById('edit-perm-username').value = username

	cbs = document.getElementsByClassName('perm-box')

	for (i=0; i< cbs.length; i++) {
		cbs[i].checked = permstring.includes(cbs[i].dataset.perm) || permstring.includes('full')
	}

}

var permfull=function() {

	cbs = document.getElementsByClassName('perm-box')

	full = cbs[0]

	if (full.checked) {
		for (i=1; i< cbs.length; i++) {
			cbs[i].checked = true;
		}
	}
}
var permother=function() {

	cbs = document.getElementsByClassName('perm-box')

	full = cbs[0]

	for (i=1; i< cbs.length; i++) {
		if(cbs[i].checked == false) {
			full.checked=false;
		}
	}
}

var cattoggle=function(id){

	var check = document.getElementById('group-'+id);

	check.click()

	var x=document.getElementsByClassName('group-'+id);
	for (i=0;i<x.length;i++) {
		x[i].checked=check.checked
	}

	card=document.getElementById('cat-card-'+id)
	card.classList.toggle('selected');
}

var all_cats=function(page) {
	var x=document.getElementsByClassName('cat-check');
	for(i=0;i<x.length;i++){
		x[i].checked=true;
	};
	
	var y=document.getElementsByClassName('cat-group');
	for(i=0;i<y.length;i++){
		y[i].checked=true;
	};

	togglecat('hot', reload=true, delay=0, page=page)	
}


//mobile prompt
if (("standalone" in window.navigator) &&			 // Check if "standalone" property exists
		window.navigator.standalone){							 // Test if using standalone navigator

		// Web page is loaded via app mode (full-screen mode)
		// (window.navigator.standalone is TRUE if user accesses website via App Mode)

} else {
	if (window.innerWidth <= 737){
		try {
			$('#mobile-prompt').tooltip('show')
			$('.tooltip')[0].addEventListener(
				'click', 
				function(event){
					$('#mobile-prompt').tooltip('hide')
					var xhr = new XMLHttpRequest();
					xhr.withCredentials=true;
					xhr.open("POST", '/dismiss_mobile_tip', true);
					xhr.send();
				}
			)
		} catch (error) {
			console.error(error);
		}
	}
}

$('.mention-user').click(function (event) {

	if (event.which != 1) {
		return
	}

	event.preventDefault();

	window.location.href='/@' + $(this).data('original-name');

});

$('.expandable-image').click( function(event) {

	if (event.which != 1) {
		return
	}
	event.preventDefault();

	var url= $(this).data('url');

	expandDesktopImage(url,url);
})