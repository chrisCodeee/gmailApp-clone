const inboxMessageDetails = [
	{ id: 1, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers - ", message: "We have your back with savings and rewards. Manage Email Preferences No Images Engineering", time: "7:15 PM" },
	{ id: 2, subject: "Linkedln Job Alerts", heading: `"electrical engineer": GE - Renewables - Power Electronics Engineer and more - `, message: "GE - Renewables Power Electronics Engineering", time: "12:15 AM" },
	{ id: 3, subject: "ScholarshipCafe", heading: "Position Matches - ", message: "Logo here Hi Christian Your position alert matched the following position(s) at scholarshipscafe.com. Positions", time: "5:15 PM" },
	{ id: 4, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers - ", message: "We have your back with savings and rewards. Manage Email Preferences No Images Engineering", time: "7:15 PM" },
	{ id: 5, subject: "Linkedln Job Alerts", heading: `"electrical engineer": GE - Renewables - Power Electronics Engineer and more - `, message: "GE - Renewables Power Electronics Engineering", time: "12:15 AM" },
	{ id: 6, subject: "ScholarshipCafe", heading: "Position Matches - ", message: "Logo here Hi Christian Your position alert matched the following position(s) at scholarshipscafe.com. Positions", time: "5:15 PM" },
	{ id: 7, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers - ", message: "We have your back with savings and rewards. Manage Email Preferences No Images Engineering", time: "7:15 PM" },
	{ id: 8, subject: "Linkedln Job Alerts", heading: `"electrical engineer": GE - Renewables - Power Electronics Engineer and more - `, message: "GE - Renewables Power Electronics Engineering", time: "12:15 AM" },
	{ id: 9, subject: "ScholarshipCafe", heading: "Position Matches - ", message: "Logo here Hi Christian Your position alert matched the following position(s) at scholarshipscafe.com. Positions", time: "5:15 PM" },
	{ id: 10, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers - ", message: "We have your back with savings and rewards. Manage Email Preferences No Images Engineering", time: "7:15 PM" },
	{ id: 11, subject: "Linkedln Job Alerts", heading: `"electrical engineer": GE - Renewables - Power Electronics Engineer and more - `, message: "GE - Renewables Power Electronics Engineering", time: "12:15 AM" },
	{ id: 12, subject: "ScholarshipCafe", heading: "Position Matches - ", message: "Logo here Hi Christian Your position alert matched the following position(s) at scholarshipscafe.com. Positions", time: "5:15 PM" },
	{ id: 13, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers - ", message: "We have your back with savings and rewards. Manage Email Preferences No Images Engineering", time: "7:15 PM" },
	{ id: 14, subject: "Linkedln Job Alerts", heading: `"electrical engineer": GE - Renewables - Power Electronics Engineer and more - `, message: "GE - Renewables Power Electronics Engineering", time: "12:15 AM" },
	{ id: 15, subject: "ScholarshipCafe", heading: "Position Matches - ", message: "Logo here Hi Christian Your position alert matched the following position(s) at scholarshipscafe.com. Positions", time: "5:15 PM" },
	{ id: 16, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers - ", message: "We have your back with savings and rewards. Manage Email Preferences No Images Engineering", time: "7:15 PM" },
	{ id: 17, subject: "Linkedln Job Alerts", heading: `"electrical engineer": GE - Renewables - Power Electronics Engineer and more - `, message: "GE - Renewables Power Electronics Engineering", time: "12:15 AM" },
	{ id: 18, subject: "ScholarshipCafe", heading: "Position Matches - ", message: "Logo here Hi Christian Your position alert matched the following position(s) at scholarshipscafe.com. Positions", time: "5:15 PM" },
	{ id: 19, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers - ", message: "We have your back with savings and rewards. Manage Email Preferences No Images Engineering", time: "7:15 PM" },
	{ id: 20, subject: "Linkedln Job Alerts", heading: `"electrical engineer": GE - Renewables - Power Electronics Engineer and more - `, message: "GE - Renewables Power Electronics Engineering", time: "12:15 AM" },
	{ id: 21, subject: "ScholarshipCafe", heading: "Position Matches - ", message: "Logo here Hi Christian Your position alert matched the following position(s) at scholarshipscafe.com. Positions", time: "5:15 PM" },
	{ id: 22, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers - ", message: "We have your back with savings and rewards. Manage Email Preferences No Images Engineering", time: "7:15 PM" },
	{ id: 23, subject: "Linkedln Job Alerts", heading: `"electrical engineer": GE - Renewables - Power Electronics Engineer and more - `, message: "GE - Renewables Power Electronics Engineering", time: "12:15 AM" },
	{ id: 24, subject: "ScholarshipCafe", heading: "Position Matches - ", message: "Logo here Hi Christian Your position alert matched the following position(s) at scholarshipscafe.com. Positions", time: "5:15 PM" },
	{ id: 25, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers - ", message: "We have your back with savings and rewards. Manage Email Preferences No Images Engineering", time: "7:15 PM" },
	{ id: 26, subject: "Linkedln Job Alerts", heading: `"electrical engineer": GE - Renewables - Power Electronics Engineer and more - `, message: "GE - Renewables Power Electronics Engineering", time: "12:15 AM" },
	{ id: 27, subject: "ScholarshipCafe", heading: "Position Matches - ", message: "Logo here Hi Christian Your position alert matched the following position(s) at scholarshipscafe.com. Positions", time: "5:15 PM" },
	{ id: 28, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers - ", message: "We have your back with savings and rewards. Manage Email Preferences No Images Engineering", time: "7:15 PM" },
	{ id: 29, subject: "Linkedln Job Alerts", heading: `"electrical engineer": GE - Renewables - Power Electronics Engineer and more - `, message: "GE - Renewables Power Electronics Engineering", time: "12:15 AM" },
	{ id: 30, subject: "ScholarshipCafe", heading: "Position Matches - ", message: "Logo here Hi Christian Your position alert matched the following position(s) at scholarshipscafe.com. Positions", time: "5:15 PM" },
	{ id: 31, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers - ", message: "We have your back with savings and rewards. Manage Email Preferences No Images Engineering", time: "7:15 PM" },
	{ id: 32, subject: "Linkedln Job Alerts", heading: `"electrical engineer": GE - Renewables - Power Electronics Engineer and more - `, message: "GE - Renewables Power Electronics Engineering", time: "12:15 AM" },
	{ id: 33, subject: "ScholarshipCafe", heading: "Position Matches - ", message: "Logo here Hi Christian Your position alert matched the following position(s) at scholarshipscafe.com. Positions", time: "5:15 PM" },
	{ id: 34, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers - ", message: "We have your back with savings and rewards. Manage Email Preferences No Images Engineering", time: "7:15 PM" },
	{ id: 35, subject: "Linkedln Job Alerts", heading: `"electrical engineer": GE - Renewables - Power Electronics Engineer and more - `, message: "GE - Renewables Power Electronics Engineering", time: "12:15 AM" },
	{ id: 36, subject: "ScholarshipCafe", heading: "Position Matches - ", message: "Logo here Hi Christian Your position alert matched the following position(s) at scholarshipscafe.com. Positions", time: "5:15 PM" },
	{ id: 37, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers - ", message: "We have your back with savings and rewards. Manage Email Preferences No Images Engineering", time: "7:15 PM" },
	{ id: 38, subject: "Linkedln Job Alerts", heading: `"electrical engineer": GE - Renewables - Power Electronics Engineer and more - `, message: "GE - Renewables Power Electronics Engineering", time: "12:15 AM" },
	{ id: 39, subject: "ScholarshipCafe", heading: "Position Matches - ", message: "Logo here Hi Christian Your position alert matched the following position(s) at scholarshipscafe.com. Positions", time: "5:15 PM" },
	{ id: 40, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers - ", message: "We have your back with savings and rewards. Manage Email Preferences No Images Engineering", time: "7:15 PM" },
];

export { inboxMessageDetails };
