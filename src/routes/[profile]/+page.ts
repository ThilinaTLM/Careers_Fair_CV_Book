import { error } from '@sveltejs/kit';

export function load({ params }: any) {
    if (params.profile) {
        return params;
    }

    throw error(404, 'Not found');
}