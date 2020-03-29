import { IMetric } from 'types';
import { DataFrame } from '@grafana/data';

/** search is key and keyValue is in query */
const searchNameIsKey = (query: DataFrame, mainMetric: IMetric): boolean => {
	if (mainMetric.key === '' && mainMetric.keyValue === '') {
		return true;
	}
	const nameQuery: string[] = query.name?.split(',').map((value) => {
		return value.replace(/[\"{}]/gm, '');
	}) || [];
	if (nameQuery && nameQuery.length > 0) {
		for (const oneQuery of nameQuery) {
			const keyValue: string[] = oneQuery.split('=');
			if (oneQuery.length === 2) {
				if (keyValue[0] === mainMetric.key
					&& keyValue[1] === mainMetric.keyValue) {
					return true;
				}
			}
		}
	}
	return false;
};

export const getResultQuery = (mainMetric: IMetric) => {
	let cnt: number | null = null;

	if (mainMetric.returnQuery
		&& mainMetric.returnQuery.length > 0) {
		const debug: number[] = [];
		let countValue: number = 0;

		cnt = 0;
		for (const line of mainMetric.returnQuery) {
			if (searchNameIsKey(line, mainMetric).toString()) {
				const sizeQuery: number = line.fields[0].values.length;

				for (let i: number = 0; i < sizeQuery; i++) {
					if (line.fields.length > 0 && line.fields[0].values.get(i)) {
						cnt += line.fields[0].values.get(i);
						debug.push(line.fields[0].values.get(i));
						++countValue;
					}
				}
			}
		}
		if (mainMetric.manageValue === 'avg') {
			cnt /= countValue;
		} else if (mainMetric.manageValue === 'error') {
			if (countValue > 1) {
				cnt = null;
			}
		}
	}
	return cnt;
};
