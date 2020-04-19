$('#newsdata').ready(function () {
    $.ajax({
        url: 'https://news.google.com/rss/search?q=Jammu%20J%26K%20Kashmir%20"Sikh"',
        type: 'GET',
        crossDomain: true,
        //dataType: 'jsonp',
        success: function (data) {
            xml = $.parseXML(data);
            $(data.responseData.feed.entries).each(function (index, entry) {
                var item_html = '<li><a target="_blank" href="' + entry.link + '">' + entry.title + '</a></li>';
                $('#newsdata ul.news-items').append(item_html);
            });
            $('#newsdata div.loading').fadeOut();
            $('#newsdata ul.news-items').slideDown();
        },
        error: function () {}

    });
});
