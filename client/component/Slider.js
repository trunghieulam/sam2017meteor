Template.Slider.helpers({
    first: function () {
        return {
            id: '0',
            url_avatar: 'img/a1.jpg',
            url_cover: 'img/1.jpg',
            title: 'Event Title',
            text: 'Note: Carousels are not supported properly in Internet Explorer 9 and earlier (because they use CSS3 transitions and animations to achieve the slide effect).',
            unit: '15CTTX',
            date: '30/12/2017',
            number: '150'
        };
    },

    events: function () {
        return _.map(_.range(2, 8), function (idx) {
            return {
                id: idx - 1,
                url_avatar: 'img/' + 'a' + idx + '.jpg',
                url_cover: 'img/' + idx + '.jpg',
                title: 'Event Title',
                text: 'Note: Carousels are not supported properly in Internet Explorer 9 and earlier (because they use CSS3 transitions and animations to achieve the slide effect).',
                unit: '15CTTX',
                date: '30/12/2017',
                number: '150'
            };
        });
    }
});