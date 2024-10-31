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
import { AzCredential } from './azCredential';

export class StorageCredentialAz extends AzCredential {
    'type': StorageCredentialAz.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "StorageCredentialAz.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StorageCredentialAz.attributeTypeMap);
    }
}

export namespace StorageCredentialAz {
    export enum TypeEnum {
        Az = <any> 'az'
    }
}