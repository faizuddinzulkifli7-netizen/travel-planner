"""
Mock data for initializing the database with sample blog posts
"""
from datetime import date
from app.schemas.blog import BlogPostCreate


def get_mock_blog_posts() -> list[BlogPostCreate]:
    """Return a list of mock blog posts for initialization"""
    return [
        BlogPostCreate(
            title='Top 10 Luxury Hotels in Paris for Your Dream Vacation',
            excerpt='Discover the most luxurious accommodations in the City of Light, from historic palaces to modern boutique hotels.',
            content='Paris, the City of Light, offers some of the world\'s most luxurious hotel experiences. From the iconic Ritz Paris to modern boutique hotels, this guide covers the top 10 luxury hotels that combine elegance, exceptional service, and prime locations. Each hotel offers unique amenities, from Michelin-starred restaurants to world-class spas, ensuring an unforgettable stay in the French capital.',
            author='Sarah Johnson',
            date=date(2024, 1, 15),
            category='Luxury Travel',
            image_url='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
        ),
        BlogPostCreate(
            title='Budget-Friendly Beach Hotels: Your Guide to Affordable Coastal Stays',
            excerpt='Enjoy stunning ocean views without breaking the bank. Our curated list of budget-friendly beach hotels offers comfort and location.',
            content='Traveling to the beach doesn\'t have to be expensive. This comprehensive guide features budget-friendly hotels near popular beaches worldwide. We\'ve selected properties that offer great value, clean accommodations, and proximity to the water. From Southeast Asia to the Mediterranean, discover affordable options that don\'t compromise on the beach experience.',
            author='Michael Chen',
            date=date(2024, 1, 10),
            category='Budget Travel',
            image_url='https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop'
        ),
        BlogPostCreate(
            title='Family-Friendly Hotels: What to Look For When Traveling with Kids',
            excerpt='Planning a family vacation? Learn what amenities and features make a hotel truly family-friendly.',
            content='Traveling with children requires special considerations when choosing accommodations. This article outlines essential features of family-friendly hotels, including kid-friendly pools, connecting rooms, play areas, and dining options. We also provide tips on booking strategies, safety considerations, and how to ensure both parents and children have an enjoyable stay.',
            author='Emily Rodriguez',
            date=date(2024, 1, 5),
            category='Family Travel',
            image_url='https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop'
        ),
        BlogPostCreate(
            title='Business Hotels: Maximizing Productivity on the Road',
            excerpt='Essential features every business traveler should look for in a hotel, from high-speed internet to meeting facilities.',
            content='Business travel demands specific hotel amenities to ensure productivity and comfort. This guide covers the must-have features for business hotels, including reliable Wi-Fi, work-friendly rooms, business centers, and convenient locations. We also discuss loyalty programs, expense management, and how to maintain work-life balance while traveling for business.',
            author='David Kim',
            date=date(2023, 12, 28),
            category='Business Travel',
            image_url='https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop'
        ),
        BlogPostCreate(
            title='Romantic Getaways: Hotels Perfect for Couples',
            excerpt='Create unforgettable memories with our selection of romantic hotels featuring stunning views and intimate settings.',
            content='Whether celebrating an anniversary, honeymoon, or just a romantic escape, choosing the right hotel sets the tone for your special time together. This article highlights hotels known for their romantic ambiance, from overwater bungalows to mountain retreats. We cover amenities like couples\' spas, private balconies, and fine dining experiences that make these properties perfect for romance.',
            author='Jessica Martinez',
            date=date(2023, 12, 20),
            category='Romantic Travel',
            image_url='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
        ),
        BlogPostCreate(
            title='Pet-Friendly Hotels: Traveling with Your Furry Friends',
            excerpt='Don\'t leave your pets behind! Discover hotels that welcome your four-legged family members with open arms.',
            content='More hotels than ever are becoming pet-friendly, recognizing that pets are part of the family. This guide explores what makes a hotel truly pet-friendly, from pet amenities and policies to nearby parks and services. Learn about pet fees, size restrictions, and how to prepare your pet for hotel stays. We\'ve also included tips for ensuring a comfortable experience for both you and your pet.',
            author='Robert Taylor',
            date=date(2023, 12, 15),
            category='Pet Travel',
            image_url='https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop'
        ),
        BlogPostCreate(
            title='Eco-Friendly Hotels: Sustainable Stays for Conscious Travelers',
            excerpt='Discover hotels that prioritize sustainability and environmental responsibility without compromising on comfort.',
            content='Eco-friendly hotels are becoming increasingly popular as travelers seek sustainable accommodation options. This guide highlights hotels that use renewable energy, implement water conservation measures, offer locally sourced food, and support local communities. Learn how to identify truly sustainable hotels and make environmentally conscious travel choices that benefit both you and the planet.',
            author='Lisa Green',
            date=date(2023, 12, 10),
            category='Sustainable Travel',
            image_url='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
        ),
        BlogPostCreate(
            title='Spa Hotels: Ultimate Relaxation and Wellness Retreats',
            excerpt='Unwind and rejuvenate at the world\'s best spa hotels, offering luxurious treatments and wellness programs.',
            content='Spa hotels provide the perfect escape for those seeking relaxation and rejuvenation. This comprehensive guide covers top spa hotels worldwide, featuring world-class treatments, thermal baths, yoga classes, and wellness programs. From traditional Thai massages to modern hydrotherapy, discover hotels that prioritize your physical and mental well-being during your stay.',
            author='Amanda White',
            date=date(2023, 12, 5),
            category='Wellness Travel',
            image_url='https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop'
        ),
        BlogPostCreate(
            title='Historic Hotels: Staying in Living History',
            excerpt='Experience the charm and character of historic hotels that have stood the test of time.',
            content='Historic hotels offer a unique blend of old-world charm and modern amenities. This article explores iconic hotels that have preserved their historical significance while providing contemporary comfort. From castles and palaces to grand railway hotels, discover properties where history comes alive. Learn about restoration efforts, architectural significance, and the stories behind these remarkable establishments.',
            author='James Anderson',
            date=date(2023, 11, 28),
            category='Historic Travel',
            image_url='https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop'
        ),
        BlogPostCreate(
            title='Boutique Hotels: Unique Stays with Character',
            excerpt='Explore charming boutique hotels that offer personalized service and distinctive design.',
            content='Boutique hotels provide an alternative to chain hotels, offering unique character, personalized service, and often more intimate settings. This guide helps you discover boutique hotels that stand out with their distinctive design, local culture integration, and attention to detail. From urban lofts to countryside retreats, find properties that reflect the personality of their location.',
            author='Sophie Brown',
            date=date(2023, 11, 20),
            category='Boutique Travel',
            image_url='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
        ),
        BlogPostCreate(
            title='All-Inclusive Resorts: Everything You Need in One Place',
            excerpt='Discover the convenience and value of all-inclusive resorts for stress-free vacations.',
            content='All-inclusive resorts take the guesswork out of vacation planning by bundling accommodations, meals, drinks, and activities into one price. This comprehensive guide covers what to expect from all-inclusive properties, from family-friendly options to adults-only retreats. Learn about tipping policies, activity schedules, dining options, and how to maximize your all-inclusive experience.',
            author='Mark Thompson',
            date=date(2023, 11, 15),
            category='Resort Travel',
            image_url='https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop'
        ),
        BlogPostCreate(
            title='Ski Resort Hotels: Your Gateway to the Slopes',
            excerpt='Find the perfect ski-in, ski-out accommodations for your winter mountain adventure.',
            content='Ski resort hotels offer convenient access to the slopes along with après-ski amenities. This guide covers everything from luxury ski lodges to budget-friendly options near popular ski destinations. Learn about ski storage, equipment rental, proximity to lifts, and what makes a hotel ideal for ski vacations. Whether you\'re a beginner or expert skier, find the perfect base for your mountain getaway.',
            author='Chris Wilson',
            date=date(2023, 11, 10),
            category='Adventure Travel',
            image_url='https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop'
        ),
        BlogPostCreate(
            title='Extended Stay Hotels: Home Away from Home',
            excerpt='Comfortable accommodations for longer trips with all the amenities you need for extended stays.',
            content='Extended stay hotels are designed for travelers who need accommodations for weeks or months. These properties typically feature kitchenettes, larger living spaces, laundry facilities, and work areas. This guide helps you choose the right extended stay hotel based on location, amenities, and pricing. Perfect for business travelers, relocating families, or anyone needing temporary housing.',
            author='Jennifer Lee',
            date=date(2023, 11, 5),
            category='Extended Stay',
            image_url='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
        ),
        BlogPostCreate(
            title='Airport Hotels: Convenient Stays for Travelers',
            excerpt='Make your travel easier with strategically located airport hotels for early flights and layovers.',
            content='Airport hotels provide convenience for travelers with early morning flights, long layovers, or delayed connections. This guide covers what to look for in airport hotels, including shuttle services, soundproofing, and proximity to terminals. Learn about booking strategies, amenities that matter most, and how to make the most of your airport hotel stay, whether it\'s for a few hours or overnight.',
            author='Daniel Park',
            date=date(2023, 10, 30),
            category='Business Travel',
            image_url='https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop'
        ),
        BlogPostCreate(
            title='Golf Resort Hotels: Perfect for Golf Enthusiasts',
            excerpt='Stay and play at world-class golf resorts offering championship courses and luxury accommodations.',
            content='Golf resort hotels combine exceptional accommodations with access to premier golf courses. This guide highlights resorts featuring championship courses, golf packages, pro shops, and practice facilities. Whether you\'re planning a golf-focused vacation or want to enjoy a round during your stay, discover resorts that cater to golfers of all skill levels with stunning course views and golf-centric amenities.',
            author='Patricia Davis',
            date=date(2023, 10, 25),
            category='Sports Travel',
            image_url='https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop'
        ),
    ]

