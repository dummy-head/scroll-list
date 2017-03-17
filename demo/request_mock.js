import Mock from 'mockjs';

let user_count = 0;
export function fetchData (count) {
	var list = [];
	let Random = Mock.Random;

	if (!count) {
		count = 20;
	}

	while (count--) {
		list.push({
			indx: user_count++,
			urid: Random.natural(1000, 9000),
			name: Random.cname(),
			date: Random.date()
		});
	}

	return list;
}
