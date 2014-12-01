describe('UnitTest:UserListCtrl', function()
{
	var scope = {}, ctrl;

	beforeEach(module('customServices'));

	beforeEach(inject(function(time)
	{
		ctrl = new UserListCtrl(scope, time);
	}));

	it('should have appropriate users count', function()
	{
		expect(scope.users.length).toBe(14);
	});

	it('should have Mark\'s birthday', function()
	{
		var birthday = scope.users[0].birthday;
		expect(birthday.getFullYear()).toBe(1933);
		expect(birthday.getMonth()).toBe(4);
		expect(birthday.getDate()).toBe(27);
	});

	it('should calculate Mark\'s age', function()
	{
		expect(scope.age(scope.users[0])).toBe(66);
	});
});