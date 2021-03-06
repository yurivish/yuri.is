+++
date = "2016-08-11T22:06:15-04:00"
seq = 3
title = "The Types of Magic"
script = true
style = true
description = "Visualizing Magic card types by color."

+++

Here's a visualization of [Magic](https://en.wikipedia.org/wiki/Magic:_The_Gathering) card types by color, shown over time. 

Colors are the standard Magic fare: 
<img class='mana-legend' src='{{< relpath "W.svg" >}}' title='White' />,
<img class='mana-legend' src='{{< relpath "U.svg" >}}' title='Blue' />,
<img class='mana-legend' src='{{< relpath "B.svg" >}}' title='Black' />,
<img class='mana-legend' src='{{< relpath "R.svg" >}}' title='Red' />,
<img class='mana-legend' src='{{< relpath "G.svg" >}}' title='Green' />,
<img class='mana-legend' src='{{< relpath "1.svg" >}}' title='Colorless' />.

<a href='#' class='toggle'>Click here</a> to toggle between absolute and relative color charts.

<svg class='block'>
	<defs><linearGradient id="the-types-of-magic-grad" x1="0" y1="0" x2="0" y2="100%"><stop offset="0" stop-color="#fff" stop-opacity="1"/><stop offset="100%" stop-color="#fff" stop-opacity="0.75"/></linearGradient>
</svg>

The colors are sorted by size, showing how each card type has a characteristic color -- creatures in <img class='mana-mini' src='{{< relpath "G.svg" >}}' title='Green' />, instants in <img class='mana-mini' src='{{< relpath "U.svg" >}}' title='Blue' />, enchantments in <img class='mana-mini' src='{{< relpath "W.svg" >}}' title='White' />, and sorceries in <img class='mana-mini' src='{{< relpath "B.svg" >}}' title='Black' />.

Dips in the chart happen when card types drop to zero, such as in 2003, when the all-creature set [Legions](http://mtgsalvation.gamepedia.com/Legions) was released.

_Data notes --_ All card counts are normalized by set size and adjusted for cards with multiple colors and types. Here's where I got the [mana symbols](http://mtgsalvation.gamepedia.com/Category:Mana_symbols) and [source data](http://mtgjson.com).
