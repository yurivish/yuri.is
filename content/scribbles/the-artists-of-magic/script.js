"use strict";
(function (slug) {
    var sets = ["Limited Edition Alpha", "Limited Edition Beta", "Unlimited Edition", "Arabian Nights", "Antiquities", "Revised Edition", "Legends", "The Dark", "Fallen Empires", "Fourth Edition", "Ice Age", "Homelands", "Alliances", "Mirage", "Visions", "Fifth Edition", "Weatherlight", "Tempest", "Stronghold", "Exodus", "Urza's Saga", "Urza's Legacy", "Classic Sixth Edition", "Urza's Destiny", "Mercadian Masques", "Nemesis", "Prophecy", "Invasion", "Planeshift", "Seventh Edition", "Apocalypse", "Odyssey", "Torment", "Judgment", "Onslaught", "Legions", "Scourge", "Eighth Edition", "Mirrodin", "Darksteel", "Fifth Dawn", "Champions of Kamigawa", "Betrayers of Kamigawa", "Saviors of Kamigawa", "Ninth Edition", "Ravnica: City of Guilds", "Guildpact", "Dissension", "Coldsnap", "Time Spiral \"Timeshifted\"", "Time Spiral", "Planar Chaos", "Future Sight", "Tenth Edition", "Lorwyn", "Morningtide", "Shadowmoor", "Eventide", "Shards of Alara", "Conflux", "Alara Reborn", "Magic 2010", "Zendikar", "Worldwake", "Rise of the Eldrazi", "Magic 2011", "Scars of Mirrodin", "Mirrodin Besieged", "New Phyrexia", "Magic 2012", "Innistrad", "Dark Ascension", "Avacyn Restored", "Magic 2013", "Return to Ravnica", "Gatecrash", "Dragon's Maze", "Magic 2014 Core Set", "Theros", "Born of the Gods", "Journey into Nyx", "Magic 2015 Core Set", "Khans of Tarkir", "Fate Reforged", "Dragons of Tarkir", "Magic Origins", "Battle for Zendikar", "Oath of the Gatewatch", "Shadows over Innistrad", "Eldritch Moon"];
    var allData = [{ "name": "Kev Walker", "values": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 4, 3, 5, 6, 4, 5, 5, 3, 4, 6, 3, 3, 6, 9, 8, 5, 10, 1, 3, 8, 8, 7, 14, 9, 8, 6, 9, 8, 8, 18, 13, 7, 8, 3, 4, 7, 7, 6, 20, 4, 3, 4, 2, 3, 2, 2, 11, 5, 2, 0, 5, 4, 3, 5, 7, 4, 3, 4, 6, 5, 4, 8, 4, 6, 3, 2, 7, 3, 3, 6, 4, 3, 3, 6, 4], "total": 429 }, { "name": "Dan Frazier", "values": [38, 39, 39, 6, 4, 32, 13, 2, 6, 33, 16, 4, 4, 4, 1, 14, 3, 5, 2, 0, 0, 2, 11, 2, 7, 2, 2, 3, 2, 4, 0, 0, 0, 0, 4, 0, 0, 3, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], "total": 319 }, { "name": "John Avon", "values": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 6, 3, 0, 0, 0, 8, 3, 6, 4, 0, 0, 0, 7, 4, 9, 3, 10, 3, 4, 8, 3, 5, 16, 9, 2, 4, 13, 4, 2, 18, 7, 5, 5, 3, 0, 4, 10, 4, 14, 2, 3, 4, 2, 0, 2, 5, 5, 12, 3, 6, 10, 2, 1, 0, 4, 5, 2, 3, 3, 5, 2, 1, 2, 0, 1, 1, 5, 2, 1, 0, 4, 0, 0, 1, 2], "total": 315 }, { "name": "Mark Tedin", "values": [16, 16, 16, 5, 8, 15, 11, 8, 7, 21, 12, 6, 6, 0, 0, 23, 1, 0, 0, 0, 5, 5, 3, 2, 4, 4, 2, 4, 3, 2, 3, 5, 2, 4, 4, 2, 3, 4, 5, 3, 3, 5, 1, 3, 3, 4, 0, 4, 0, 3, 6, 1, 0, 7, 4, 2, 3, 1, 5, 1, 1, 3, 3, 0, 1, 2, 4, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "total": 315 }, { "name": "Greg Staples", "values": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 5, 0, 4, 3, 4, 3, 6, 3, 9, 5, 9, 4, 3, 11, 6, 5, 9, 9, 9, 6, 9, 5, 2, 11, 7, 7, 8, 0, 0, 9, 5, 1, 14, 6, 2, 2, 2, 4, 1, 3, 8, 2, 1, 2, 6, 1, 3, 3, 7, 5, 0, 4, 3, 7, 3, 4, 7, 4, 3, 3, 3, 2, 0, 0, 4, 0, 2, 4, 2], "total": 312 }, { "name": "Pete Venters", "values": [0, 0, 0, 0, 6, 1, 5, 3, 7, 4, 7, 5, 8, 5, 6, 7, 7, 8, 7, 5, 8, 7, 5, 5, 12, 5, 3, 7, 2, 6, 3, 6, 4, 5, 8, 4, 6, 6, 6, 6, 5, 5, 5, 4, 6, 5, 4, 5, 4, 2, 6, 3, 0, 7, 4, 2, 4, 2, 3, 2, 3, 1, 0, 0, 0, 2, 3, 2, 1, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0], "total": 303 }, { "name": "Anson Maddocks", "values": [30, 30, 30, 6, 9, 29, 12, 11, 7, 33, 17, 11, 6, 0, 0, 26, 1, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "total": 281 }, { "name": "Christopher Moeller", "values": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 6, 5, 2, 8, 3, 7, 6, 12, 5, 4, 5, 6, 5, 9, 4, 4, 4, 5, 6, 6, 5, 7, 2, 3, 2, 1, 6, 3, 1, 7, 8, 4, 3, 3, 2, 1, 2, 7, 9, 4, 4, 9, 1, 0, 0, 5, 7, 3, 7, 4, 7, 3, 1, 4, 2, 3, 1, 3, 0, 0, 2, 1, 0, 0, 3, 4], "total": 269 }, { "name": "Douglas Shuler", "values": [28, 29, 29, 6, 5, 28, 9, 5, 8, 29, 16, 4, 5, 8, 1, 12, 4, 6, 1, 0, 0, 4, 10, 4, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "total": 263 }, { "name": "Ron Spencer", "values": [1, 1, 1, 0, 0, 1, 0, 10, 8, 4, 5, 0, 3, 7, 3, 10, 6, 10, 9, 7, 13, 5, 6, 4, 5, 3, 3, 10, 3, 8, 5, 9, 3, 3, 10, 4, 4, 9, 4, 2, 3, 5, 3, 3, 4, 2, 3, 0, 3, 3, 4, 0, 0, 5, 4, 2, 4, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "total": 251 }, { "name": "Carl Critchlow", "values": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 11, 4, 0, 4, 12, 5, 3, 8, 1, 10, 5, 10, 3, 5, 10, 5, 5, 10, 7, 4, 8, 9, 6, 4, 16, 9, 3, 6, 2, 1, 7, 3, 0, 11, 0, 0, 5, 3, 5, 1, 3, 7, 0, 0, 0, 3, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0], "total": 245 }, { "name": "Mark Poole", "values": [24, 25, 25, 6, 9, 26, 14, 7, 10, 26, 16, 5, 4, 4, 1, 12, 2, 7, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], "total": 244 }];
    allData.sort(function (a, b) { return d3.descending(a.total, b.total); });
    function sparkline(update) {
        var enter = update.enter().append('g').attr('class', 'sparkline');
        var num = function (n, i) { return i == 7 ? n : n + ' cards'; }; // save space for christopher moeller
        // Background rect for mouse events
        enter.append('rect').attr('class', 'background').attr('fill', 'transparent');
        // Path for 'bar chart'
        enter.append('path').style('pointer-events', 'none').attr('fill', 'url(#' + slug + '-grad)').attr('opacity', 1);
        // Rect for hover
        enter.append('rect').attr('class', 'hover').style('pointer-events', 'none').attr('fill', '#fff').style('display', 'none');
        // Text for name
        enter.append('text').attr('class', 'name').style('pointer-events', 'none')
            .text(function (d, i) { return d.name; })
            .attr('text-anchor', 'start');
        // Text for label
        enter.append('text').attr('class', 'num').style('pointer-events', 'none')
            .text(function (d, i) { return num(d.total, i); })
            .attr('text-anchor', 'end');
        var both = update.merge(enter);
        // Transform the chart based on a grid. TODO: Better abstraction.
        both.attr('transform', function (d, i) { return d.transform(d, i); });
        both.select('path').attr('d', function (d) {
            var x = d.x, y = d.y, height = d.height;
            var area = d3.area()
                .x0(function (d, i) { return x(i); })
                .x1(function (d, i) { return x(i); })
                .y0(function (d) { return height / 2 - y(d); })
                .y1(function (d) { return height / 2 + y(d); })
                .curve(d3.curveStepAfter);
            return area(d.values.concat([0])); // so the last set shows up
        });
        both.select('.name')
            .attr('y', function (d) { return d.height + d.textOffset; });
        both.select('.num')
            .attr('x', function (d) { return d.width; })
            .attr('y', function (d) { return d.height + d.textOffset; });
        both.select('.hover').attr('width', function (d) { return d.x(1) - d.x(0); });
        var trans = function (sel) { return sel.transition().duration(300).ease(d3.easeCubicOut); };
        function move(d) {
            var index = Math.max(0, Math.min(d.values.length - 1, Math.round(d.x.invert(d3.mouse(this)[0]))));
            trans(both.select('path')).attr('opacity', 0.5);
            both.select('.num').classed('active', true)
                .text(function (d, i) { return num(d.values[index], i); })
                .attr('x', function (d) { return d.width; })
                .append('tspan')
                .attr('text-anchor', 'right')
                .attr('x', d.width)
                .attr('dy', '1.5em')
                .text(sets[index]);
            both.select('rect.hover')
                .style('display', 'block')
                .attr('x', function (d) { return d.x(index); })
                .attr('y', function (d) { return d.height / 2 - d.y(d.values[index]); })
                .attr('height', function (d) { return 2 * d.y(d.values[index]); });
        }
        function end(d) {
            trans(both.select('path')).attr('opacity', 1);
            both.select('.num')
                .classed('active', false)
                .text(function (d, i) { return num(d.total, i); });
            both.select('rect.hover')
                .style('display', 'none');
        }
        both.select('.background')
            .attr('width', function (d) { return d.width; })
            .attr('height', function (d) { return d.height + d.textOffset; })
            .on('mousemove', move).on('mouseleave', end)
            .on('touchstart', move).on('touchmove', move).on('touchend', end);
        return enter;
    }
    function go() {
        var svg = d3.select('#' + slug + ' svg');
        var svgWidth = svg.node().getBoundingClientRect().width;
        var vpad = 60; // vertical padding for the svg
        // 600 = magic number at which christopher moeller starts to collide with his label
        var nx = svgWidth <= 320 ? 1 : (svgWidth <= 600 ? 2 : 3);
        var ny = Math.ceil(allData.length / nx);
        var gx = d3.scaleBand().domain(d3.range(nx)).rangeRound([0, svgWidth]).paddingInner(nx == 1 ? 0 : 0.2); // work around possible d3 bug? it pads the left when there is 1 column.
        var gy = d3.scaleBand().domain(d3.range(ny)).rangeRound([vpad, ny * (gx.bandwidth() * 0.75)]).paddingInner(0.8);
        var transform = function (d, i) { return 'translate(' + [
            gx(i % nx),
            gy(~~(i / nx))
        ] + ')'; };
        var data = allData.map(function (d, i) { return ({
            name: d.name,
            total: d.total,
            values: d.values,
            transform: transform,
            width: gx.bandwidth(),
            height: gy.bandwidth(),
            textOffset: gy.bandwidth() * 1.1,
            x: d3.scaleLinear().domain([0, d.values.length]).range([0, gx.bandwidth()]).clamp(true),
            y: d3.scaleLinear().domain([0, d3.max(d.values)]).range([1, gy.bandwidth() / 2])
        }); });
        svg
            .attr('height', 2 * vpad + d3.max(gy.range()))
            .style('-webkit-tap-highlight-color', 'transparent') // disable tap highlight on ios
            .style('-webkit-touch-callout', 'none'); // disable selection
        var update = svg
            .selectAll('g.sparkline').data(data)
            .call(sparkline);
    }
    go();
    d3.select(window).on('resize.' + slug, go);
})('the-artists-of-magic');
