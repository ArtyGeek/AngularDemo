describe('E2ETest:App', function() 
{	
	function navigate() {
		browser().navigateTo('../../app/index.html');
	}

	it('shoud show right number of rows in grid', function()
	{
		navigate();
		expect(element('table tbody tr').count()).toBe(14);
	});
	
	it('shoud have correct Tim\'s address', function()
	{
		navigate();
		expect(element('table tbody tr:eq(1) td:eq(1)').text()).toBe('TimGoldworthy@dayrep.com');
	});
	
	it('shoud calculate Goodwill\'s age', function ()
	{
		navigate();
		expect(element('table tbody tr:eq(2) td:eq(3)').text()).toBe('28');
	});
});