/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";
export declare const JobStatus: core.serialization.ObjectSchema<
  serializers.JobStatus.Raw,
  JulepApi.JobStatus
>;
export declare namespace JobStatus {
  interface Raw {
    name: string;
    reason?: string | null;
    created_at: string;
    updated_at?: string | null;
    id: string;
    has_progress?: boolean | null;
    progress?: number | null;
    state: serializers.JobStatusState.Raw;
  }
}