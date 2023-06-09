/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PostPimage from './PostPimage';

/**
 * The Post model module.
 * @module model/Post
 * @version 1.0.0
 */
class Post {
    /**
     * Constructs a new <code>Post</code>.
     * @alias module:model/Post
     * @param ptitle {String} 
     * @param ptext {String} 
     * @param pimage {module:model/PostPimage} 
     */
    constructor(ptitle, ptext, pimage) { 
        
        Post.initialize(this, ptitle, ptext, pimage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ptitle, ptext, pimage) { 
        obj['ptitle'] = ptitle;
        obj['ptext'] = ptext;
        obj['pimage'] = pimage;
    }

    /**
     * Constructs a <code>Post</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Post} obj Optional instance to populate.
     * @return {module:model/Post} The populated <code>Post</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Post();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('ptitle')) {
                obj['ptitle'] = ApiClient.convertToType(data['ptitle'], 'String');
            }
            if (data.hasOwnProperty('ptext')) {
                obj['ptext'] = ApiClient.convertToType(data['ptext'], 'String');
            }
            if (data.hasOwnProperty('pimage')) {
                obj['pimage'] = PostPimage.constructFromObject(data['pimage']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Post.prototype['_id'] = undefined;

/**
 * @member {String} ptitle
 */
Post.prototype['ptitle'] = undefined;

/**
 * @member {String} ptext
 */
Post.prototype['ptext'] = undefined;

/**
 * @member {module:model/PostPimage} pimage
 */
Post.prototype['pimage'] = undefined;






export default Post;

