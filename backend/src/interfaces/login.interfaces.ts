import { z } from 'zod';
import { loginSerializer } from '../serializers/login.serializers';

export type TLogin = z.infer<typeof loginSerializer>;