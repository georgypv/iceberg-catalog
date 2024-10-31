/**
 * iceberg-catalog
 * Implementation of the Iceberg REST Catalog server. 
 *
 * The version of the OpenAPI document: 0.4.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { GetWarehouseResponse } from './getWarehouseResponse';

export class ListWarehousesResponse {
    /**
    * List of warehouses in the project.
    */
    'warehouses': Array<GetWarehouseResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "warehouses",
            "baseName": "warehouses",
            "type": "Array<GetWarehouseResponse>"
        }    ];

    static getAttributeTypeMap() {
        return ListWarehousesResponse.attributeTypeMap;
    }
}
