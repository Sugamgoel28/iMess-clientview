import React, { useState } from 'react';
import ComplaintTable from '../components/ComplaintTable';
const AdminComplaintPortal = () => {
    // Static complaint data with modified complaint types
    const staticComplaintData = [
        { complaintUID: '121SD401', dateTimeStamp: '2:00pm 2/04/24', title: 'Insect found in dal', studentName: 'Saffi', rollNumber: '121EI0375', complaintType: 'Food Hygiene', hallName: 'SD' },
        { complaintUID: '121DBA402', dateTimeStamp: '4:00pm 2/04/24', title: 'Hair found in curry', studentName: 'John Doe', rollNumber: '121EI0401', complaintType: 'Management Issues', hallName: 'DBA' },
        { complaintUID: '121DBA403', dateTimeStamp: '10:00am 3/04/24', title: 'Spoiled milk', studentName: 'Alice Smith', rollNumber: '121EI0402', complaintType: 'Food Quality', hallName: 'DBA' },
        { complaintUID: '121SD404', dateTimeStamp: '3:00pm 4/04/24', title: 'Moldy bread', studentName: 'Emily Brown', rollNumber: '121ID0403', complaintType: 'Food Hygiene', hallName: 'SD' },
        { complaintUID: '121VS405', dateTimeStamp: '12:00pm 5/04/24', title: 'Foul smell from food', studentName: 'Daniel Johnson', rollNumber: '121EI0404', complaintType: 'Others', hallName: 'VS' },
        { complaintUID: '121CVR406', dateTimeStamp: '8:00am 6/04/24', title: 'Expired vegetables', studentName: 'Sophia Wilson', rollNumber: '121EI0405', complaintType: 'Food Hygiene', hallName: 'CVR' },
        { complaintUID: '121KMS407', dateTimeStamp: '6:00pm 7/04/24', title: 'Stale rice', studentName: 'Liam Martinez', rollNumber: '121EI0406', complaintType: 'Food Quality', hallName: 'KMS' },
        { complaintUID: '121DBA408', dateTimeStamp: '9:00am 8/04/24', title: 'Burnt roti', studentName: 'Olivia Garcia', rollNumber: '121EI0407', complaintType: 'Management Issues', hallName: 'DBA' },
        { complaintUID: '121VS409', dateTimeStamp: '1:00pm 9/04/24', title: 'Rotten fruits', studentName: 'Mason Lopez', rollNumber: '121EI0408', complaintType: 'Food Hygiene', hallName: 'VS' },
        { complaintUID: '121SD410', dateTimeStamp: '5:00pm 10/04/24', title: 'Dirty utensils', studentName: 'Ella Martinez', rollNumber: '121EI0409', complaintType: 'Management Issues', hallName: 'SD' },
        { complaintUID: '121HB411', dateTimeStamp: '11:00am 11/04/24', title: 'Uncooked rice', studentName: 'Alexander Lee', rollNumber: '121EI0410', complaintType: 'Food Quality', hallName: 'HB' },
        { complaintUID: '121CVR412', dateTimeStamp: '3:00pm 12/04/24', title: 'Insect in soup', studentName: 'Victoria Clark', rollNumber: '121EI0411', complaintType: 'Food Hygiene', hallName: 'CVR' },
        { complaintUID: '121KMS413', dateTimeStamp: '10:00am 13/04/24', title: 'Food poisoning', studentName: 'Henry Taylor', rollNumber: '121EI0412', complaintType: 'Others', hallName: 'KMS' },
        { complaintUID: '121DBA414', dateTimeStamp: '2:00pm 14/04/24', title: 'Soggy sandwiches', studentName: 'Grace Turner', rollNumber: '121EI0413', complaintType: 'Food Quality', hallName: 'DBA' },
        { complaintUID: '121VS415', dateTimeStamp: '4:00pm 15/04/24', title: 'Raw vegetables', studentName: 'Leo Adams', rollNumber: '121EI0414', complaintType: 'Food Quality', hallName: 'VS' },
        { complaintUID: '121SD416', dateTimeStamp: '7:00am 16/04/24', title: 'Burnt curry', studentName: 'Zoe Hill', rollNumber: '121EI0415', complaintType: 'Food Quality', hallName: 'SD' },
        { complaintUID: '121HB417', dateTimeStamp: '12:00pm 17/04/24', title: 'Undercooked pasta', studentName: 'Christopher Wood', rollNumber: '121EI0416', complaintType: 'Food Quality', hallName: 'HB' },
        { complaintUID: '121CVR418', dateTimeStamp: '9:00am 18/04/24', title: 'Sour milk', studentName: 'Natalie Stewart', rollNumber: '121EI0417', complaintType: 'Food Quality', hallName: 'CVR' },
        { complaintUID: '121KMS419', dateTimeStamp: '6:00pm 19/04/24', title: 'Overcooked rice', studentName: 'Dylan Powell', rollNumber: '121EI0418', complaintType: 'Food Quality', hallName: 'KMS' },
        { complaintUID: '121DBA420', dateTimeStamp: '3:00pm 20/04/24', title: 'Unpleasant smell from food', studentName: 'Aria Kelly', rollNumber: '121EI0419', complaintType: 'Others', hallName: 'DBA' },
    ];

    const [complaints, setComplaints] = useState(staticComplaintData);

    return (
        <div className="w-full h-full p-8 mx-auto">
            <h1 className="mb-4 text-3xl font-bold">Admin Complaint Portal</h1>
            <ComplaintTable complaints={complaints} />
        </div>
    );
};

export default AdminComplaintPortal;