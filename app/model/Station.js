Ext.define('Music.model.Station', {
    extend : 'Ext.data.Model',
    config : {
        fields : [
            'band',
            'callLeters',
            'frequency',
            'marketCity',

            'state',
            'tagline',
            {
                name    : 'urls',
                mapping : 'url',
                convert : function(value) {
                    var urls = [],
                        i = 0,
                        validItems = {
                            'PodCast'                : 1,
                            'Audio MP3 Stream'       : 1,
                            'Newscast'               : 1
                            // Later!
//                            'Twitter'                : 1,
//                            'Organization Home Page' : 1,
//                            'Program Schedule'       : 1,
//                            'Pledge Page'            : 1,
//                            'Facebook Url'           : 1
                        },
                        len,
                        item,
                        type;

                    if (value instanceof Array) {
                        len = value.length;

                        for (; i < len; ++i) {
                            item = value[i];
                            type = item.type;
                            // Use a hash map for fast tests!
                            if (validItems[type]) {
                                urls.push(item);
                            }
                        }
                        console.log(urls)
                        return urls;
                    }

                    return value;
                }
            },
            {
                name    : 'name',
                mapping : 'name',
                convert : function(v, record) {
                    // inject leaf for the detail card
                    record.data.leaf = !!v;
                    return v;
                }
            }
        ]
    }
});