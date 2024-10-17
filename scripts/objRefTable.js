const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Arr,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutEnd,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.Audio.Acts.SetPaused,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Arr.Exps.Back,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Cnds.While,
		C3.Plugins.Arr.Cnds.CompareSize,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Arr.Exps.IndexOf,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.zeropad,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Arr.Acts.Pop,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.IsGroupActive
	];
};
self.C3_JsPropNameTable = [
	{yildiz: 0},
	{yildiz2: 0},
	{yildiz3: 0},
	{yildiz4: 0},
	{yildiz5: 0},
	{yildiz6: 0},
	{yildiz7: 0},
	{Sine: 0},
	{btnBasla: 0},
	{kapla: 0},
	{btnFullScreen: 0},
	{btnHazirlayanlar: 0},
	{btnHome: 0},
	{durum: 0},
	{btnMuzik: 0},
	{btnSes: 0},
	{btnTekrarOyna: 0},
	{btnBilgi: 0},
	{Touch: 0},
	{Mouse: 0},
	{Audio: 0},
	{Browser: 0},
	{gameBackground: 0},
	{sorular: 0},
	{bitkiler: 0},
	{mantarlar: 0},
	{sorudiz: 0},
	{background: 0},
	{hazirlayanlar: 0},
	{bilgi: 0},
	{dogrutext: 0},
	{yanlistext: 0},
	{end: 0},
	{meb: 0},
	{tebrik: 0},
	{mikroskobik: 0},
	{hayvanlar: 0},
	{dogruyanlis: 0},
	{carpi: 0},
	{Sprite: 0},
	{butonlar: 0},
	{yildizz: 0},
	{randomsoru: 0},
	{dogru_sayisi: 0},
	{tiklandi: 0},
	{yanlis_sayisi: 0}
];

self.InstanceType = {
	yildiz: class extends self.ISpriteInstance {},
	yildiz2: class extends self.ISpriteInstance {},
	yildiz3: class extends self.ISpriteInstance {},
	yildiz4: class extends self.ISpriteInstance {},
	yildiz5: class extends self.ISpriteInstance {},
	yildiz6: class extends self.ISpriteInstance {},
	yildiz7: class extends self.ISpriteInstance {},
	btnBasla: class extends self.ISpriteInstance {},
	btnFullScreen: class extends self.ISpriteInstance {},
	btnHazirlayanlar: class extends self.ISpriteInstance {},
	btnHome: class extends self.ISpriteInstance {},
	btnMuzik: class extends self.ISpriteInstance {},
	btnSes: class extends self.ISpriteInstance {},
	btnTekrarOyna: class extends self.ISpriteInstance {},
	btnBilgi: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	gameBackground: class extends self.ISpriteInstance {},
	sorular: class extends self.ISpriteInstance {},
	bitkiler: class extends self.ISpriteInstance {},
	mantarlar: class extends self.ISpriteInstance {},
	sorudiz: class extends self.IArrayInstance {},
	background: class extends self.ISpriteInstance {},
	hazirlayanlar: class extends self.ISpriteInstance {},
	bilgi: class extends self.ISpriteInstance {},
	dogrutext: class extends self.ITextInstance {},
	yanlistext: class extends self.ITextInstance {},
	end: class extends self.ISpriteInstance {},
	meb: class extends self.ISpriteInstance {},
	tebrik: class extends self.ISpriteInstance {},
	mikroskobik: class extends self.ISpriteInstance {},
	hayvanlar: class extends self.ISpriteInstance {},
	dogruyanlis: class extends self.ISpriteInstance {},
	carpi: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	butonlar: class extends self.ISpriteInstance {},
	yildizz: class extends self.ISpriteInstance {}
}