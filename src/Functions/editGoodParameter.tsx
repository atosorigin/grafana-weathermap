import { CoordinateSpaceClass } from '../Models/CoordinateSpaceClass';
import { CoordinateSpaceExtendClass } from '../Models/CoordinateSpaceExtendClass';

/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
export const editGoodParameter = (
	name: string, editCoor: CoordinateSpaceClass,
	newValue: string): CoordinateSpaceClass => {
	if (name.startsWith('positionXMin')) {
		editCoor.setXMin(newValue);
	} else if (name.startsWith('positionXMax')) {
		editCoor.setXMax(newValue);
	} else if (name.startsWith('positionYMin')) {
		editCoor.setYMin(newValue);
	} else if (name.startsWith('positionYMax')) {
		editCoor.setYMax(newValue);
	} else if (name.startsWith('label')) {
		editCoor.setLabel(newValue);
	}
	return editCoor;
};

export const editGoodParameterExtend = (
	name: string, editCoor: CoordinateSpaceExtendClass,
	newValue: string): CoordinateSpaceExtendClass => {
	if (name.startsWith('positionXMin')) {
		editCoor.xMin = newValue;
	} else if (name.startsWith('positionXMax')) {
		editCoor.xMax = newValue;
	} else if (name.startsWith('positionYMin')) {
		editCoor.yMin = newValue;
	} else if (name.startsWith('positionYMax')) {
		editCoor.yMax = newValue;
	} else if (name.startsWith('label')) {
		editCoor.label = newValue;
	} else if (name.startsWith('image')) {
		editCoor.img = newValue;
	} else if (name.startsWith('key')) {
		editCoor.key = newValue;
	} else if (name.startsWith('valueKey')) {
		editCoor.valueKey = newValue;
	}
	return editCoor;
};
