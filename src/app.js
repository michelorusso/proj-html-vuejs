var app = new Vue(
    {
    el: '#root',
    data: {  
        active: false,
        navLink: [ 'Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
        dropDown: [ 'Homepage', 'Social', 'Section', 'Outline' ],
        adress: [
            '382 NE 191st ST # 87394 Miamim, FL 33179-3899',
            '+1 (305)547-9909(9am-5pm EST, Monday, Friday)',
            'support@maxcoach.com'
        ],
        explore: [
            'Start here',
            'Blog',
            'About us',
        ],
        empty: [
            'Success story',
            'Courses',
            'Contact Us',
        ],
        information: [
            'Membership',
            'Purchase Guide',
            'Privacy Policy',
            'Terms of Service',
        ]
    }, 
    methods: {
        openDropDown(index) {
            
            if( this.active === index) {
				this.active = false;
			} else {
				this.active = index;
			}
        },
    },
    mounted() {

    }
});

