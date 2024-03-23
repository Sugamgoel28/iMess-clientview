import React, {useState} from 'react';

const MessMenu = () => {
    const menuItems = [
        {
            day: 'Mon',
            breakfast: 'Vada, Idli, Sambar, Chutney',
            lunch: 'Gobhi Matar Masala, Aloo Fry, Salad',
            snacks: 'Veg Sandwich, Tea',
            dinner: 'Chole Bhature, Sweet Pumpkin Curry, Kheer',
        },
        {
            day: 'Tue',
            breakfast: 'Paratha, Aloo Gobi, Pickle',
            lunch: 'Rice, Kadhi Pakora, Bhindi Fry, Roti',
            snacks: 'Banana, Toast',
            dinner: 'Mutton Curry, Rice, Raita',
        },
        {
            day: 'Wed',
            breakfast: 'Oats, Milk, Fruits',
            lunch: 'Rice, Chana Masala, Gobi Manchurian, Roti',
            snacks: 'Yogurt, Cookies',
            dinner: 'Fish Fry, Rice, Salad',
        },
        {
            day: 'Thu',
            breakfast: 'Puri, Sabzi, Chutney',
            lunch: 'Rice, Rajma Masala, Aloo Matar, Roti',
            snacks: 'Fruits, Nuts',
            dinner: 'Chicken Tikka Masala, Roti, Raita',
        },
        {
            day: 'Fri',
            breakfast: 'Bread Omelette, Toast, Jam',
            lunch: 'Biryani (Veg/Non-Veg), Raita',
            snacks: 'Samosa, Chaat',
            dinner: 'Special Dish (e.g., Pasta, Noodles)',
        },
        {
            day: 'Sat',
            breakfast: 'Waffles, Syrup, Fruits',
            lunch: 'Rice, Chana Masala, Gobi Manchurian, Roti',
            snacks: 'Ice Cream, Cake',
            dinner: 'Pizza/Dessert (e.g., Kheer)',
        },
        {
            day: 'Sun',
            breakfast: 'Dosa, Idli, Sambar, Chutney',
            lunch: 'Rice, Dal, Chole, Sabzi, Roti',
            snacks: 'Fruits, Biscuits',
            dinner: 'Chicken Biryani, Raita, Salad',
        }
    ];
    const [hoveredRowIndex, setHoveredRowIndex] = useState(null);

    return (
       <div className="container w-2/3 px-4 py-8 mx-auto">
            <table className="w-full border border-gray-200 rounded-lg table-auto">
                <thead>
                    <tr className="text-gray-100 bg-indigo-600 hover:bg-indigo-500">
                        <th className="px-4 py-2 text-left">Day<br/>  </th>
                        <th className="px-4 py-2 text-left">Breakfast<br/>
                        (7:30-9:15)</th>
                        <th className="px-4 py-2 text-left">Lunch<br/>  (12:00-13:30)</th>
                        <th className="px-4 py-2 text-left">Snacks<br/> (17:00-18:15)</th>
                        <th className="px-4 py-2 text-left">Dinner<br/> (19:45-21:15)</th>
                    </tr>
                </thead>
                <tbody>
                    {menuItems.map((item, index) => (
                        <tr 
                            key={item.day} 
                            className={`border border-yellow-500 ${hoveredRowIndex === index ? 'bg-white-100' : 'bg-yellow-50'}`}
                            onMouseEnter={() => setHoveredRowIndex(index)} // Set hoveredRowIndex when mouse enters row
                            onMouseLeave={() => setHoveredRowIndex(null)}  // Reset hoveredRowIndex when mouse leaves row
                        >
                            <td className="px-4 py-2 text-left">{item.day}</td>
                            <td className="px-4 py-2 text-left border border-yellow-500">{item.breakfast}</td>
                            <td className="px-4 py-2 text-left">{item.lunch}</td>
                            <td className="px-4 py-2 text-left border border-yellow-500">{item.snacks}</td>
                            <td className="px-4 py-2 text-left">{item.dinner}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MessMenu;