/**
 * Copyright 2018 Google LLC. All Rights Reserved.
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

export const PROBLEMATIC_CREDENTIALS_WARNING =
    `Your application has authenticated using end user credentials from Google
Cloud SDK. We recommend that most server applications use service accounts
instead. If your application continues to use end user credentials from Cloud
SDK, you might receive a "quota exceeded" or "API not enabled" error. For
more information about service accounts, see
https://cloud.google.com/docs/authentication/.`;

export const DEFAULT_PROJECT_ID_DEPRECATED =
    `The 'getDefaultProjectId' method has been deprecated, and will be removed
 in the 3.0 release of this library. Please use the 'getProjectId' method instead.`;
