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
import { UserLastUpdatedWith } from './userLastUpdatedWith';
import { UserType } from './userType';

/**
* User of the catalog
*/
export class User {
    /**
    * Timestamp when the user was created
    */
    'createdAt': Date;
    /**
    * Email of the user
    */
    'email'?: string | null;
    /**
    * The user\'s ID
    */
    'id': string;
    'lastUpdatedWith': UserLastUpdatedWith;
    /**
    * Name of the user
    */
    'name': string;
    /**
    * Timestamp when the user was last updated
    */
    'updatedAt'?: Date | null;
    'userType': UserType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "createdAt",
            "baseName": "created-at",
            "type": "Date"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "lastUpdatedWith",
            "baseName": "last-updated-with",
            "type": "UserLastUpdatedWith"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated-at",
            "type": "Date"
        },
        {
            "name": "userType",
            "baseName": "user-type",
            "type": "UserType"
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}

export namespace User {
}