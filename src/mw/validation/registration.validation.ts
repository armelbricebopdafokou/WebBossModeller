import  Joi from 'joi'
import express from 'express'
import {
  ContainerTypes,
  // Extend from this to define a valid schema type/interface
  ValidatedRequestSchema,

} from 'express-joi-validation'


/**
 * This is the validation
 */
export const registrationSchema = Joi.object({
  name: Joi.string().required() ,
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
})

/**
 * This defines the fiels, that the request.body should contain
 */
export interface RegistrationRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    name: string,
    email:string,
    password: string
  }
}
