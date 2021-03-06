import { SelectableValue, DataFrame } from '@grafana/data';
import { LowerLimitClass } from 'Models/LowerLimitClass';
import { PointClass } from 'Models/PointClass';
import { LinkClass } from 'Models/LinkClass';
import { OrientedLinkClass } from 'Models/OrientedLinkClass';
import { RegionClass, Coord4D } from 'Models/RegionClass';
import { Style } from 'components/Parametrage/styleComponent';
// import { TextObject } from 'Models/TextObjectClass';
import { Filtred } from 'Functions/loaderGabarit';
import { TextObject } from 'Models/TextObjectClass';

/**
 * interface to save texte settings (police, size, style)
 */
export interface TexteSettings {
  /** police simple panel */
  police: string;
  /** size simple panel */
  size: string;
  /** style simple panel */
  style: Style;
}

export interface MetaFile {
  meta: string;
  obj: {
    colorText: string;
    colorBack: string;
    style: {
      bold: string;
      italic: string;
      underline: string;
    };
  };
}

export interface LowerLimit {
  id: number;
  lowerLimitMin: string;
  lowerLimitMax: string;
  backColor: string;
  borderColor: string;
  sizeBorder: string;
}

export interface GabaritFile {
  fileName: string;
  queryID: string;
  loaded: boolean;
  globalGabarit: GlobalGabarit;
  templateGabaritPoint: TemplateGabaritPoint[];
  templateGabaritRegion: TemplateGabaritRegion[];
  templateGabaritLink: TemplateGabaritLink[];
  templateGabaritPointDefault: TemplateGabaritPoint[];
  templateGabaritRegionDefault: TemplateGabaritRegion[];
  templateGabaritLinkDefault: TemplateGabaritLink[];
}

export interface GlobalGabarit {
  lowerLimit: any[];
  textObject: any;
  defaultColor: string;
  colorMode: string;
  traceBack: string;
  traceBorder: string;
}

export interface TemplateGabaritPoint {
  filtered: string;
  labelfix: string;
  xylabel: string;
  xylabelfix: string;
  type: string;
  name: string;
  meta: MetaFile[];
  label: string;
  positionParameter: any;
  mainMetric: Metric;
  metrics: Metric[];
  linkURL: any;
  valueMetric: string;
  drawGraphicMarker: SelectableValue<string>;
  shape: SelectableValue<string>;
  // sizeWidth: SelectableValue<string>;
  sizeWidth: string;
  sizeHeight: SelectableValue<string>;
  color: string;
  associateOrientedLinksIn: OrientedLinkClass[];
  associateOrientedLinksOut: OrientedLinkClass[];
}

export interface TemplateGabaritRegion {
  filtered: string;
  labelfix: string;
  xylabel: string;
  //xylabel0: string;
  xylabelfix: string;
  //xylabelfix0: string;
  type: string;
  meta: MetaFile[];
  label: string;
  positionParameter: any;
  mainMetric: Metric;
  metrics: Metric[];
  linkURL: any;
  idSVG: string;
  mode: string;
  img: string;
  orientedLink: OrientedLinkClass[];
  color: string;
}

export interface TemplateGabaritLink {
  filtered: string;
  labelfix: string;
  xylabelA: string;
  xylabelB: string;
  xylabelC: string;
  xylabelfixA: string;
  xylabelfixB: string;
  xylabelfixC: string;
  type: string;
  name: string;
  meta: MetaFile[];
  label: string;
  positionParameter: any;
  mainMetric: Metric;
  metrics: Metric[];
  mainMetricB: Metric;
  metricsB: Metric[];
  linkURL: any;
  orientationLink: SelectableValue<string>;
  size: string;
  colorCoordinateA: string;
  colorCoordinateB: string;
  valueMainMetricA: string;
  valueMainMetricB: string;
  pointIn: string;
  pointOut: string;
  regionIn: string;
  regionOut: string;
  zIndex: string;
  isIncurved: SelectableValue<string>;
  color: string;
}

export interface Metadata {
  meta: string;
  obj: TextObject;
}

export declare type TManageValue = 'avg' | 'sum' | 'err';

export interface Metric {
  key: string;
  unit: string;
  /** ecriture scientifique */
  format: string;
  keyValue: string;
  filter?: Filtred[];
  refId?: string;
  expr?: string;
  returnQuery?: DataFrame[];
  /** avg, count, error */
  manageValue: TManageValue;
}

export interface MetricSettings {
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
  __name__: string;
  job: string;
  //key: string,
}

export interface ResultQuery {
  metric: any;
  value: any[];
}

export interface DataQuery {
  resultType: string;
  result: ResultQuery[];
}

export interface ReturnQuery {
  status: string;
  data: DataQuery;
}

export interface Target {
  expr: string;
  refId?: string;
}

export interface Background {
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
  /** check if is Url or Uploaded from computer */
  isUploaded: boolean;
  /** name of uploaded file if image is uploaded from computer */
  nameUploadedImage?: string;
}

export interface TimeRange {
  from: string;
  to: string;
}

export interface UrlList {
  total: string[];
  multi: string[];
  mono: string[];
}

export interface ImportFile {
  name: string;
  content: string;
}

export interface CoordinateSpaceInitial {
  /** coordinate for initial space */
  coordinate: Coord4D;
  /** display zone in SimplePanel (orange rectangle) */
  displayArea: boolean;
  /** if true use default coor 0-100 else use -100-100 */
  //defaultReferentiel: boolean;
}

interface Legend {
  hiddenLegend: boolean;
  x: number;
  y: number;
}

/**
 * Stock the values between SimpleEditor and SimplePanel
 */
// tslint:disable-next-line:interface-name
export interface SimpleOptions extends MetricSettings {
  /** legend */
  legend: Legend;

  /** display: police, size and style text */
  display: TexteSettings;
  /****to do */
  displayButton: boolean;
  /**
   * Espace de visualisation initial
   */
  coordinateSpaceInitial: CoordinateSpaceInitial;

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
  panelTargets: Target[];
  /**
   * List of targets loaded for fetch data
   */
  promTargets: Target[];
  /**
   * List of target load at init for fetch data
   */
  promGlobalTargets: Target[];
  /**
   * Time range selected for fetch data
   */
  timeRange: TimeRange;
  /**
   * Input of editable target
   */
  personalTarget: Target;
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
  queryProm: string[];
  /**
   * List of iniot query that will be send to the server
   */
  queryPromGlobal: string[];
  /**
   * List of range query that will be send to the server
   */
  queryPromRange: string[];
  /**
   * List of time that can be picked in "Time selector display"
   */
  listStep: Array<SelectableValue<string>>;
  /**
   * Return of the prometheus's API call
   */
  jsonQueryReturn: ReturnQuery[];
  /**
   * Return of the init prometheus's API call
   */
  jsonGlobalQueryReturn: ReturnQuery[];
  /**
   * TODO
   */
  mainTarget: Target;
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
      id: number;
    },
    {
      x: number;
      xDefault: number;
      y: number;
      yDefault: number;
      labelPoint: string;
      point: any;
      labelRegion: string;
      region: any;
    },
    {
      x: number;
      xDefault: number;
      y: number;
      yDefault: number;
      labelPoint: string;
      point: any;
      labelRegion: string;
      region: any;
    },
    {
      x: number;
      y: number;
      labelPoint: string;
      point: any;
      labelRegion: string;
      region: any;
    }
  ];

  indexOrientedLink: number;

  indexPoint: number;

  indexRegion: number;

  listCollapsePoint: boolean[];

  listCollapseOrientedLink: boolean[];
  /** background image with property */
  baseMap: Background;
  saveImportUrl: UrlList;
  saveImportFile: ImportFile[];
  totalUrlInput: string;
  multiUrlInput: string;
  monoUrlInput: string;

  zIndexOrientedLink: number;
  orientedLinkToUpgrade: SelectableValue<OrientedLinkClass>;
  orientedLinkToDowngrade: SelectableValue<OrientedLinkClass>;
  checkIndexMultiLink: number;

  newPoint: boolean;
  newOrientedLink: boolean;

  currentDashboard: boolean;

  gabaritUrlInput: string;

  saveGabaritDefaultUrl: string;

  saveMetadatavalue: string[];
  saveGabaritURL: string[];
  saveGabaritFile: GabaritFile[];
  saveDefaultGabaritFile: GabaritFile;
  gabaritDefault: GabaritFile;
  updateOnlyInitialSpace: boolean;
}

export const defaults: SimpleOptions = {
  saveGabaritDefaultUrl: '',
  saveDefaultGabaritFile: {
    queryID: 'A',
    fileName: '',
    loaded: false,
    globalGabarit: {
      lowerLimit: [
        {
          id: 0,
          lowerLimitMin: '0',
          lowerLimitMax: '0',
          backColor: 'blue',
          borderColor: 'red',
          sizeBorder: '1px',
        },
      ],
      textObject: {
        value: 'default',
        isTextTooltip: 'false',
        colorBack: 'blue',
        colorText: 'black',
        style: {
          bold: 'false',
          italic: 'false',
          underline: 'false',
        },
        generateObjectText: 'false',
        valueGenerateObjectText: {
          legendElement: 'default',
          numericFormatElement: 'default',
          unit: 'default',
          displayObjectInTooltip: 'false',
          addColorTextElement: 'false',
          colorTextElement: 'black',
          addColorBackElement: 'false',
          colorBackElement: 'white',
        },
        generateAuxiliaryElement: {
          legendElement: 'default',
          numericFormatElement: 'default',
          unit: 'default',
          displayObjectInTooltip: 'false',
          addColorTextElement: 'false',
          colorTextElement: 'black',
          addColorBackElement: 'false',
          colorBackElement: 'white',
        },
      },
      defaultColor: 'black',
      colorMode: 'true',
      traceBack: 'true',
      traceBorder: 'true',
    },
    templateGabaritPoint: [],
    templateGabaritRegion: [],
    templateGabaritLink: [],
    templateGabaritPointDefault: [],
    templateGabaritRegionDefault: [],
    templateGabaritLinkDefault: [],
  },
  legend: { hiddenLegend: true, x: 0, y: 0 },
  baseMap: {
    image: '',
    layerImage: '',
    modeSVG: true,
    width: '0',
    height: '0',
    idSVG: '',
    isUploaded: false,
  },
  // imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/be/Locator_Grid.png',
  coordinateSpaceInitial: {
    coordinate: {
      xMin: '0',
      xMax: '0',
      yMin: '0',
      yMax: '0',
    },
    displayArea: true,
  },
  displayButton: false,
  regionCoordinateSpace: [],
  arrayPoints: [],
  arrayLinks: [],
  arrayOrientedLinks: [],
  display: {
    police: 'Helvetica',
    size: '1em',
    style: { italic: false, bold: false, underline: false },
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
  panelList: [{ value: '0', label: '0' }],
  panelId: 0,
  panelType: '',
  panelTargets: [],
  promTargets: [],
  promGlobalTargets: [],
  Json: {},
  timeRange: { from: '2020-01-02 00:00:00', to: '2020-01-02 00:00:00' },
  personalTarget: { expr: '' },
  timeQuery: '2020-01-02 00:00:00',
  promUrl: 'http://localhost:9090/api/v1/',
  queryProm: [],
  queryPromGlobal: [],
  queryPromRange: [],
  listStep: [{ value: '0', label: '0' }],
  jsonQueryReturn: [],
  jsonGlobalQueryReturn: [],
  mainTarget: { expr: '' },
  mainQueryProm: '',
  mainQueryReturn: {
    status: '',
    data: {
      resultType: '',
      result: [
        {
          metric: {
            __name__: '',
            job: '',
            //key: '',
          },
          value: [],
        },
      ],
    },
  },
  testMainQueryReturn: {},
  coordinatesToDrawLinkWithClick: [
    {
      id: 0,
    },
    {
      x: 0,
      xDefault: 0,
      y: 0,
      yDefault: 0,
      labelPoint: '',
      point: {},
      labelRegion: '',
      region: {},
    },
    {
      x: 0,
      xDefault: 0,
      y: 0,
      yDefault: 0,
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
  newPoint: true,
  newOrientedLink: true,
  currentDashboard: false,
  gabaritUrlInput: '',
  saveGabaritURL: [],
  saveMetadatavalue: [],
  saveGabaritFile: [],
  gabaritDefault: {
    queryID: 'A',
    fileName: 'default',
    loaded: false,
    globalGabarit: {
      lowerLimit: [
        {
          id: 0,
          lowerLimitMin: '',
          lowerLimitMax: '',
          backColor: 'blue',
          borderColor: 'red',
          sizeBorder: '1',
        },
      ],
      textObject: {
        value: 'default',
        isTextTooltip: 'false',
        colorBack: 'blue',
        colorText: 'black',
        style: {
          bold: 'false',
          italic: 'false',
          underline: 'false',
        },
        generateObjectText: 'false',
        valueGenerateObjectText: {
          legendElement: 'default',
          numericFormatElement: 'default',
          unit: 'default',
          displayObjectInTooltip: 'false',
          addColorTextElement: 'false',
          colorTextElement: 'black',
          addColorBackElement: 'false',
          colorBackElement: 'white',
        },
        generateAuxiliaryElement: {
          legendElement: 'default',
          numericFormatElement: 'default',
          unit: 'default',
          displayObjectInTooltip: 'false',
          addColorTextElement: 'false',
          colorTextElement: 'black',
          addColorBackElement: 'false',
          colorBackElement: 'white',
        },
      },
      defaultColor: 'black',
      colorMode: 'true',
      traceBack: 'true',
      traceBorder: 'true',
    },
    templateGabaritPoint: [],
    templateGabaritRegion: [],
    templateGabaritLink: [],
    templateGabaritPointDefault: [],
    templateGabaritRegionDefault: [],
    templateGabaritLinkDefault: [],
  },
  updateOnlyInitialSpace: false,
};
