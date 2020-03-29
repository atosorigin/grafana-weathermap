import React from 'react';
import ReactDOM from 'react-dom';
import FetchButton from '../fetchButton';
import { LoadingState } from '@grafana/data';
import { defaults, SimpleOptions } from '../../types';
import { act } from 'react-dom/test-utils';

/*
 * testing the FetchButton component features
 * - fetch data from query with and without range
 * - delete all targets
 */
describe('FetchButton tests', () => {
    let container, component;
    const additionalStep = { value: '1', label: '1' };
    let testProps = {};
    /*
     * Mock "onOptionChange" by re-rendering the component with the new options
     */
    const mockFunctions = {
        onOptionsChange : (options: SimpleOptions, callback?: () => void) => {
            testProps.options = options;
            act(() => {
                ReactDOM.render(<FetchButton ref={c => component = c} {...testProps} />, container);
            });
        }
    };
    beforeEach(() => {
        const clonedDefaults = JSON.parse(JSON.stringify(defaults));
        clonedDefaults.listStep[1] = JSON.parse(JSON.stringify(additionalStep));
        clonedDefaults.promTargets = ['test'];
        container = document.createElement('div');
        document.body.appendChild(container);
        testProps = {
            options: clonedDefaults,
            onOptionsChange: mockFunctions.onOptionsChange,
            data: {
                state: LoadingState.Done,
                series: [
                    {
                        name: "serieName",
                        fields: [],
                        length: 15
                    }
                ],
                timeRange: clonedDefaults.timeRange
            }
        };

        act(() => {
            ReactDOM.render(<FetchButton ref={c => component = c} {...testProps} />, container);
        });
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
        component = null;
        jest.clearAllMocks();
    });


    describe('test fetch query range', () => {
        test('simple json', (done) => {
            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => {
                        return new Promise((resolve) => {
                            resolve({
                                "testdata": "test"
                            });
                        });
                    }
                })
            );
            const spy = jest.spyOn(component, 'fetchQuerryRange');
            component.fetchQuerryRange();
            // How to know if function calls ended? timeout feel unstable
            setTimeout(() => {
                expect(spy).toHaveBeenCalled();
                expect(component.props.options.jsonQueryReturn).toStrictEqual([{
                    "testdata": "test"
                }]);

                global.fetch.mockRestore();
                done();
            }, 1000);
        });
        test('json test 1', (done) => {
            const testJSON = {"status":"success","data":{"resultType":"vector","result":[{"metric":{"__name__":"node_filesystem_avail_bytes","device":"/dev/sda1","fstype":"ext4","instance":"localhost:9100","job":"LinuxServer","mountpoint":"/"},"value":[1581071655,"575389696"]},{"metric":{"__name__":"node_filesystem_avail_bytes","device":"/dev/sr0","fstype":"iso9660","instance":"localhost:9100","job":"LinuxServer","mountpoint":"/media/cdrom0"},"value":[1581071655,"0"]},{"metric":{"__name__":"node_filesystem_avail_bytes","device":"tmpfs","fstype":"tmpfs","instance":"localhost:9100","job":"LinuxServer","mountpoint":"/run"},"value":[1581071655,"479019008"]},{"metric":{"__name__":"node_filesystem_avail_bytes","device":"tmpfs","fstype":"tmpfs","instance":"localhost:9100","job":"LinuxServer","mountpoint":"/run/lock"},"value":[1581071655,"5238784"]},{"metric":{"__name__":"node_filesystem_avail_bytes","device":"tmpfs","fstype":"tmpfs","instance":"localhost:9100","job":"LinuxServer","mountpoint":"/run/user/1000"},"value":[1581071655,"485945344"]}]}};
            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => {
                        return new Promise((resolve) => {
                            resolve(testJSON);
                        });
                    }
                })
            );
            const spy = jest.spyOn(component, 'fetchQuerryRange');
            component.fetchQuerryRange();
            // How to know if function calls ended? timeout feel unstable
            setTimeout(() => {
                expect(spy).toHaveBeenCalled();
                
                expect(component.props.options.jsonQueryReturn).toStrictEqual([testJSON]);

                global.fetch.mockRestore();
                done();
            }, 1000);
        });
        
        test('json test 2', (done) => {
            const testJSON = {"status":"success","data":{"resultType":"vector","result":[{"metric":{"cpu":"0","instance":"localhost:9100","job":"LinuxServer","mode":"system"},"value":[1581071655,"0.03599886666666672"]},{"metric":{"cpu":"1","instance":"localhost:9100","job":"LinuxServer","mode":"system"},"value":[1581071655,"0.04576451666666668"]}]}};
            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => {
                        return new Promise((resolve) => {
                            resolve(testJSON);
                        });
                    }
                })
            );
            const spy = jest.spyOn(component, 'fetchQuerryRange');
            component.fetchQuerryRange();
            // How to know if function calls ended? timeout feel unstable
            setTimeout(() => {
                expect(spy).toHaveBeenCalled();
                
                expect(component.props.options.jsonQueryReturn).toStrictEqual([testJSON]);

                global.fetch.mockRestore();
                done();
            }, 1000);
        });
        
        test('json test 3', (done) => {
            const testJSON = {"status":"success","data":{"resultType":"vector","result":[{"metric":{"device":"enp0s3","instance":"localhost:9100","job":"LinuxServer"},"value":[1581071655,"306.6797066666667"]},{"metric":{"device":"lo","instance":"localhost:9100","job":"LinuxServer"},"value":[1581071655,"12159.861858333334"]}]}};
            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => {
                        return new Promise((resolve) => {
                            resolve(testJSON);
                        });
                    }
                })
            );
            const spy = jest.spyOn(component, 'fetchQuerryRange');
            component.fetchQuerryRange();
            // How to know if function calls ended? timeout feel unstable
            setTimeout(() => {
                expect(spy).toHaveBeenCalled();
                
                expect(component.props.options.jsonQueryReturn).toStrictEqual([testJSON]);

                global.fetch.mockRestore();
                done();
            }, 1000);
        });
        
        test('json test 4', (done) => {
            const testJSON = {"status":"success","data":{"resultType":"vector","result":[{"metric":{"code":"200","instance":"localhost:9100","job":"LinuxServer"},"value":[1581071655,"0.10655666666666666"]},{"metric":{"code":"500","instance":"localhost:9100","job":"LinuxServer"},"value":[1581071655,"0"]},{"metric":{"code":"503","instance":"localhost:9100","job":"LinuxServer"},"value":[1581071655,"0"]}]}};
            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => {
                        return new Promise((resolve) => {
                            resolve(testJSON);
                        });
                    }
                })
            );
            const spy = jest.spyOn(component, 'fetchQuerryRange');
            component.fetchQuerryRange();
            // How to know if function calls ended? timeout feel unstable
            setTimeout(() => {
                expect(spy).toHaveBeenCalled();
                
                expect(component.props.options.jsonQueryReturn).toStrictEqual([testJSON]);

                global.fetch.mockRestore();
                done();
            }, 1000);
        });
 
        test('json test fail', (done) => {
            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => {
                        return new Promise((resolve, reject) => {
                            reject('failed to parse json')
                        });
                    }
                })
            );
            const spy = jest.spyOn(component, 'fetchQuerryRange');
            component.fetchQuerryRange();
            // How to know if function calls ended? timeout feel unstable
            setTimeout(() => {
                expect(spy).toHaveBeenCalled();
                
                expect(component.props.options.jsonQueryReturn).toStrictEqual([]);

                global.fetch.mockRestore();
                done();
            }, 1000);
        });
    });

    describe('test fetch query', () => {
        test('simple json', (done) => {
            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => {
                        return new Promise((resolve) => {
                            resolve({
                                "testdata": "test"
                            });
                        });
                    }
                })
            );
            const spy = jest.spyOn(component, 'fetchQuerry');
            component.fetchQuerry();
            // How to know if function calls ended? timeout feel unstable
            setTimeout(() => {
                expect(spy).toHaveBeenCalled();
                expect(component.props.options.jsonQueryReturn).toStrictEqual([{
                    "testdata": "test"
                }]);

                global.fetch.mockRestore();
                done();
            }, 1000);
        });
        test('json test 1', (done) => {
            const testJSON = {"status":"success","data":{"resultType":"vector","result":[{"metric":{"__name__":"node_filesystem_avail_bytes","device":"/dev/sda1","fstype":"ext4","instance":"localhost:9100","job":"LinuxServer","mountpoint":"/"},"value":[1581071655,"575389696"]},{"metric":{"__name__":"node_filesystem_avail_bytes","device":"/dev/sr0","fstype":"iso9660","instance":"localhost:9100","job":"LinuxServer","mountpoint":"/media/cdrom0"},"value":[1581071655,"0"]},{"metric":{"__name__":"node_filesystem_avail_bytes","device":"tmpfs","fstype":"tmpfs","instance":"localhost:9100","job":"LinuxServer","mountpoint":"/run"},"value":[1581071655,"479019008"]},{"metric":{"__name__":"node_filesystem_avail_bytes","device":"tmpfs","fstype":"tmpfs","instance":"localhost:9100","job":"LinuxServer","mountpoint":"/run/lock"},"value":[1581071655,"5238784"]},{"metric":{"__name__":"node_filesystem_avail_bytes","device":"tmpfs","fstype":"tmpfs","instance":"localhost:9100","job":"LinuxServer","mountpoint":"/run/user/1000"},"value":[1581071655,"485945344"]}]}};
            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => {
                        return new Promise((resolve) => {
                            resolve(testJSON);
                        });
                    }
                })
            );
            const spy = jest.spyOn(component, 'fetchQuerry');
            component.fetchQuerry();
            // How to know if function calls ended? timeout feel unstable
            setTimeout(() => {
                expect(spy).toHaveBeenCalled();
                
                expect(component.props.options.jsonQueryReturn).toStrictEqual([testJSON]);

                global.fetch.mockRestore();
                done();
            }, 1000);
        });
        
        test('json test 2', (done) => {
            const testJSON = {"status":"success","data":{"resultType":"vector","result":[{"metric":{"cpu":"0","instance":"localhost:9100","job":"LinuxServer","mode":"system"},"value":[1581071655,"0.03599886666666672"]},{"metric":{"cpu":"1","instance":"localhost:9100","job":"LinuxServer","mode":"system"},"value":[1581071655,"0.04576451666666668"]}]}};
            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => {
                        return new Promise((resolve) => {
                            resolve(testJSON);
                        });
                    }
                })
            );
            const spy = jest.spyOn(component, 'fetchQuerry');
            component.fetchQuerry();
            // How to know if function calls ended? timeout feel unstable
            setTimeout(() => {
                expect(spy).toHaveBeenCalled();
                
                expect(component.props.options.jsonQueryReturn).toStrictEqual([testJSON]);

                global.fetch.mockRestore();
                done();
            }, 1000);
        });
        
        test('json test 3', (done) => {
            const testJSON = {"status":"success","data":{"resultType":"vector","result":[{"metric":{"device":"enp0s3","instance":"localhost:9100","job":"LinuxServer"},"value":[1581071655,"306.6797066666667"]},{"metric":{"device":"lo","instance":"localhost:9100","job":"LinuxServer"},"value":[1581071655,"12159.861858333334"]}]}};
            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => {
                        return new Promise((resolve) => {
                            resolve(testJSON);
                        });
                    }
                })
            );
            const spy = jest.spyOn(component, 'fetchQuerry');
            component.fetchQuerry();
            // How to know if function calls ended? timeout feel unstable
            setTimeout(() => {
                expect(spy).toHaveBeenCalled();
                
                expect(component.props.options.jsonQueryReturn).toStrictEqual([testJSON])

                global.fetch.mockRestore();
                done();
            }, 1000);
        });
        
        test('json test 4', (done) => {
            const testJSON = {"status":"success","data":{"resultType":"vector","result":[{"metric":{"code":"200","instance":"localhost:9100","job":"LinuxServer"},"value":[1581071655,"0.10655666666666666"]},{"metric":{"code":"500","instance":"localhost:9100","job":"LinuxServer"},"value":[1581071655,"0"]},{"metric":{"code":"503","instance":"localhost:9100","job":"LinuxServer"},"value":[1581071655,"0"]}]}};
            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => {
                        return new Promise((resolve) => {
                            resolve(testJSON);
                        });
                    }
                })
            );
            const spy = jest.spyOn(component, 'fetchQuerry');
            component.fetchQuerry();
            // How to know if function calls ended? timeout feel unstable
            setTimeout(() => {
                expect(spy).toHaveBeenCalled();
                
                expect(component.props.options.jsonQueryReturn).toStrictEqual([testJSON]);

                global.fetch.mockRestore();
                done();
            }, 1000);
        });
 
        test('json test fail', (done) => {
            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => {
                        return new Promise((resolve, reject) => {
                            reject('failed to parse json')
                        });
                    }
                })
            );
            const spy = jest.spyOn(component, 'fetchQuerry');
            component.fetchQuerry();
            // How to know if function calls ended? timeout feel unstable
            setTimeout(() => {
                expect(spy).toHaveBeenCalled();
                
                expect(component.props.options.jsonQueryReturn).toStrictEqual([]);

                global.fetch.mockRestore();
                done();
            }, 1000);
        });
    });

    test('test delete targets', () => {
        const spy = jest.spyOn(component, 'deleteTargets');
        component.deleteTargets();
        // How to know if function calls ended?
        expect(spy).toHaveBeenCalled();
        expect(component.props.options.promTargets.length).toBe(0);
    });

});
