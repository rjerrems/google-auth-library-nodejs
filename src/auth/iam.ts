/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface RequestMetadata {
  'x-goog-iam-authority-selector': string;
  'x-goog-iam-authorization-token': string;
}

export class IAMAuth {
  /**
   * IAM credentials.
   *
   * @param selector the iam authority selector
   * @param token the token
   * @constructor
   */
  constructor(public selector: string, public token: string) {
    this.selector = selector;
    this.token = token;
  }

  /**
   * Indicates whether the credential requires scopes to be created by calling
   * createdScoped before use.
   *
   * @return always false
   */
  createScopedRequired() {
    // IAM authorization does not use scopes.
    return false;
  }

  /**
   * Pass the selector and token to the metadataFn callback.
   *
   * @param unused_uri is required of the credentials interface
   * @param metadataFn a callback invoked with object
   *                   containing request metadata.
   */
  getRequestMetadata(
      unusedUri: string|null,
      metadataFn: (err: Error|null, metadata?: RequestMetadata) => void) {
    metadataFn(null, {
      'x-goog-iam-authority-selector': this.selector,
      'x-goog-iam-authorization-token': this.token
    });
  }
}
