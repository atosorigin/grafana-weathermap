import { SelectableValue, DataFrame } from '@grafana/data';
import { LowerLimitClass } from 'Models/LowerLimitClass';
import { PointClass } from 'Models/PointClass';
import { LinkClass } from 'Models/LinkClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { RegionClass, ICoord4D } from 'Models/RegionClass';

/**
 * interface to save texte settings (police, size, style)
 */
export interface ITexteSettings {
	/** police simple panel */
	police: string;
	/** size simple panel */
	size: string;
	/** style simple panel */
	style: string;
}

export declare type TManageValue = 'avg' | 'sum' | 'error';

export interface IMetric {
	key: string;
	unit: string;
	/** ecriture scientifique */
	format: string;
	keyValue: string;
	refId?: string;
	expr?: string;
	returnQuery?: DataFrame[];
	/** avg, count, error */
	manageValue: TManageValue;
}

export interface IMetricSettings {
	/**
	 * fond is active (color)
	 */
	fondIsActive: boolean;
	/**
	 * contour is active
	 */
	contourIsActive: boolean;
	/**
	 * seuil for variable color
	 */
	lowerLimit: LowerLimitClass[];
	/**
	 * color mode for parametresGeneriques
	 */
	colorMode: boolean;
}


export interface MetricQuery {
	__name__: string,
	job: string,
	//key: string,
}

export interface ResultQuery {
	metric: any,
	value: Array<any>
}

export interface DataQuery {
	resultType: string,
	result: Array<ResultQuery>,
}

export interface ReturnQuery {
	status: string,
	data: DataQuery
}

export interface ITarget {
	expr: string;
	refId?: string;
}

export interface IBackground {
	/** background image */
	image: string;
	/** layer image */
	layerImage: string;
	/** use image svg or value get by user */
	modeSVG: boolean;
	/** size width image or get by user */
	width: string;
	/** size height image or get by user */
	height: string;
	/** id svg for tag */
	idSVG: string;
}

export interface TimeRange {
	from: string;
	to: string;
}

export interface IUrlList {
	total: Array<string>;
	multi: Array<string>;
	mono: Array<string>;
}

export interface IImportFile {
	name: string;
	content: string
}

export interface ICoordinateSpaceInitial {
	/** coordinate for initial space */
	coordinate: ICoord4D;
	/** display zone in SimplePanel (orange rectangle) */
	displayArea: boolean;
}

interface ILegend {
	hiddenLegend: boolean;
	x: number;
	y: number;
}

/**
 * Stock the values between SimpleEditor and SimplePanel
 */
// tslint:disable-next-line:interface-name
export interface SimpleOptions extends
	IMetricSettings {
	/** legend */
	legend: ILegend;

	/** display: police, size and style text */
	display: ITexteSettings;
/****to do */
displayButton: boolean;
	/**
	 * Espace de visualisation initial
	 */
	coordinateSpaceInitial: ICoordinateSpaceInitial;

	/**
	 * Espace de coordonnees
	 */
	regionCoordinateSpace: RegionClass[];

	/**
	 * Liste des points générés depuis l'onglet Point
	 */
	arrayPoints: PointClass[];

	/**
	 * Liste des liens générés depuis l'onglet Link
	 */
	arrayLinks: LinkClass[];

	/**
	 * Liste des liens orientés générés depuis l'onglet OrientedLink
	 */
	arrayOrientedLinks: OrientedLinkClass[];

	/**
	 * Raw format of dashboard's json
	 */
	contentJson: string;
	/**
	 * Object format of dashboard's json
	 */
	Json: any;
	/**
	 * Id of dashboard
	 */
	Id: number;
	/**
	 * Uid of dashboard
	 */
	uid: string;
	/**
	 * Title of dashboard
	 */
	title: string;
	/**
	 * Style of dashboard
	 */
	style: string;
	/**
	 * True of false is the dashboard is editable
	 */
	editable: string;
	/**
	 * Version number of the dashboard
	 */
	version: number;
	/**
	 * Refresh time that is picked
	 */
	refresh: SelectableValue<string>;
	/**
	 * Shemas version number of the dashboard
	 */
	shemaVersion: number;
	/**
	 * Timezone of the dashboard
	 */
	timezone: string;
	/**
	 * Actual panel selected in "Time selector display"
	 */
	actualPanel: SelectableValue<string>;
	/**
	 * List of panel selectable in the dashboard
	 */
	panelList: Array<SelectableValue<string>>;
	/**
	 * Id of the selected panel
	 */
	panelId: number;
	/**
	 * Type of the selected panel
	 */
	panelType: string;
	/**
	 * List of targets in the selected panel
	 */
	panelTargets: Array<ITarget>;
	/**
	 * List of targets loaded for fetch data
	 */
	promTargets: Array<ITarget>;
	/**
	 * List of target load at init for fetch data
	 */
	promGlobalTargets: Array<ITarget>;
	/**
	 * Time range selected for fetch data
	 */
	timeRange: TimeRange;
	/**
	 * Input of editable target
	 */
	personalTarget: ITarget;
	/**
	 * Time instant selected for fetch data
	 */
	timeQuery: string;
	/**
	 * Input of prometheus server url
	 */
	promUrl: string;
	/**
	 * List of query that will be send to the server
	 */
	queryProm: Array<string>;
	/**
	 * List of iniot query that will be send to the server
	 */
	queryPromGlobal: Array<string>;
	/**
	 * List of range query that will be send to the server
	 */
	queryPromRange: Array<string>;
	/**
	 * List of time that can be picked in "Time selector display"
	 */
	listStep: Array<SelectableValue<string>>;
	/**
	 * Return of the prometheus's API call
	 */
	jsonQueryReturn: Array<ReturnQuery>;
	/**
	 * Return of the init prometheus's API call
	 */
	jsonGlobalQueryReturn: Array<ReturnQuery>;
	/**
	 * TODO
	 */
	mainTarget: ITarget;
	/**
	 * TODO
	 */
	mainQueryProm: string;
	/**
	 * TODO
	 */
	mainQueryReturn: ReturnQuery;

	testMainQueryReturn: any;

	coordinatesToDrawLinkWithClick: [
		{
			id: number,
		},
		{
			x: number,
			y: number,
			labelPoint: string,
			point: any,
			labelRegion: string,
			region: any
		},
		{
			x: number,
			y: number,
			labelPoint: string,
			point: any,
			labelRegion: string,
			region: any
		},
		{
			x: number,
			y: number,
			labelPoint: string,
			point: any,
			labelRegion: string,
			region: any
		}
	];

	indexOrientedLink: number;

	indexPoint: number;

	indexRegion: number;

	listCollapsePoint: boolean[];

	listCollapseOrientedLink: boolean[];
	/** background image with property */
	baseMap: IBackground;
	saveImportUrl: IUrlList;
	saveImportFile: IImportFile[];
	totalUrlInput: string;
	multiUrlInput: string;
	monoUrlInput: string;

	zIndexOrientedLink: number;
	orientedLinkToUpgrade: SelectableValue<OrientedLinkClass>;
	orientedLinkToDowngrade: SelectableValue<OrientedLinkClass>;
	checkIndexMultiLink: number;


}

export const defaults: SimpleOptions = {
	legend: { 'hiddenLegend': true, 'x': 0, 'y': 0 },
	baseMap: { 'image': '', 'layerImage': '', 'modeSVG': true, 'width': '', 'height': '', 'idSVG': '' },
	// imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/be/Locator_Grid.png',
	coordinateSpaceInitial: {
		'coordinate': {
			'xMin': '-100', 'xMax': '100',
			'yMin': '-100', 'yMax': '100',
		},
		'displayArea': true,
	},
	displayButton: false,
	regionCoordinateSpace: [],
	arrayPoints: [],
	arrayLinks: [],
	arrayOrientedLinks: [],
	display: {
		'police': 'Helvetica',
		'size': '1em',
		'style': 'normal',
	},
	fondIsActive: true,
	contourIsActive: true,
	lowerLimit: [],
	colorMode: true,
	contentJson: 'contenu du dashboard',
	Id: 0,
	uid: '',
	title: '',
	style: '',
	editable: '',
	version: 0,
	refresh: { value: '0', label: '0' },
	shemaVersion: 0,
	timezone: '',
	actualPanel: { value: '0', label: '0' },
	panelList: [
		{ value: '0', label: '0' }
	],
	panelId: 0,
	panelType: '',
	panelTargets: [],
	promTargets: [],
	promGlobalTargets: [],
	Json: {},
	timeRange: { from: '2020-01-02 00:00:00', to: '2020-01-02 00:00:00' },
	personalTarget: { expr: "" },
	timeQuery: '2020-01-02 00:00:00',
	promUrl: 'http://localhost:9090/api/v1/',
	queryProm: [],
	queryPromGlobal: [],
	queryPromRange: [],
	listStep: [
		{ value: '0', label: '0' },
	],
	jsonQueryReturn: [],
	jsonGlobalQueryReturn: [],
	mainTarget: { expr: '' },
	mainQueryProm: '',
	mainQueryReturn: {
		status: '', data: {
			resultType: '', result: [{
				metric: {
					__name__: '',
					job: '',
					//key: '',
				},
				value: [],
			}],
		},
	},
	testMainQueryReturn: {},
	coordinatesToDrawLinkWithClick: [
		{
			id: 0,
		},
		{
			x: 0,
			y: 0,
			labelPoint: '',
			point: {},
			labelRegion: '',
			region: {},
		},
		{
			x: 0,
			y: 0,
			labelPoint: '',
			point: {},
			labelRegion: '',
			region: {},
		},
		{
			x: 0,
			y: 0,
			labelPoint: '',
			point: {},
			labelRegion: '',
			region: {},
		}
	],

	indexOrientedLink: 0,
	indexPoint: 0,
	indexRegion: 0,
	listCollapsePoint: [],
	listCollapseOrientedLink: [],
	saveImportUrl: {
		total: [],
		multi: [],
		mono: [],
	},
	saveImportFile: [],
	totalUrlInput: '',
	multiUrlInput: '',
	monoUrlInput: '',
	zIndexOrientedLink: 1,
	orientedLinkToUpgrade: {},
	orientedLinkToDowngrade: {},
	checkIndexMultiLink: 0,

};
