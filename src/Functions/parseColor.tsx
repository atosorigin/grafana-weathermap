/** parse color for svg */
export interface Color {
  /** base color */
  color: string;
  /** transparency level */
  transparency: string;
}

export const parseColor = (color: string): Color => {
  let colorEdit: string = color;
  let transparency = '';
  if (color.indexOf('#') > -1) {
    colorEdit = color.replace('rgba', 'rgb');
    if (colorEdit.indexOf(',') > -1) {
      const arrayColor: string[] = colorEdit.split(',');
      colorEdit = arrayColor[0] + ',' + arrayColor[1] + ',' + arrayColor[2] + ')';
      if (arrayColor.length > 3) {
        transparency = arrayColor[3].replace(')', '');
      }
    }
  }
  return { color: colorEdit, transparency: transparency };
};
